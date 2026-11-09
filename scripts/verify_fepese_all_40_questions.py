import sys
import io
import json
import re
from pathlib import Path
import pymupdf
import difflib

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BASE_DIR = Path(__file__).resolve().parent.parent
PDF_PATH = BASE_DIR / "provas_pdf" / "agente_fiscal_tributario 1.pdf"
GABARITO_PDF_PATH = BASE_DIR / "gabaritos_pdf" / "gabarito_agente_fiscal_tributario 1.pdf"
JSON_PATH = BASE_DIR / "src" / "data" / "imported" / "agente_fiscal_tributario_1.json"

OFFICIAL_GABARITO_6M02 = {
    1: "E", 2: "A", 3: "C", 4: "C", 5: "D", 6: "A", 7: "D", 8: "B", 9: "E", 10: "B",
    11: "E", 12: "A", 13: "B", 14: "D", 15: "C", 16: "E", 17: "A", 18: "C", 19: "E", 20: "D",
    21: "C", 22: "B", 23: "B", 24: "A", 25: "E", 26: "D", 27: "B", 28: "A", 29: "X", 30: "B",
    31: "C", 32: "E", 33: "D", 34: "A", 35: "D", 36: "C", 37: "B", 38: "D", 39: "C", 40: "A"
}

DISCIPLINES_MAP = {
    range(1, 11): "Língua Portuguesa",
    range(11, 16): "Conhecimentos Atuais",
    range(16, 41): "Conhecimentos Específicos"
}

def get_discipline(q_num):
    for r, disc in DISCIPLINES_MAP.items():
        if q_num in r:
            return disc
    return "Conhecimentos Específicos"

def clean_spacing(s):
    if not s:
        return ""
    # Rejunta palavras hifenizadas no final de linha da coluna (ex: 'supe-\nrou' -> 'superou')
    s = re.sub(r'(\w+)-\s*\n\s*(\w+)', r'\1\2', s)
    # Remove marcas de rodapé/seção adjacentes capturadas no final do bloco
    s = re.sub(r'\n\s*Conhecimentos\s+(?:Atuais|Específicos)\s*\n\s*\d+\s+questões.*$', '', s, flags=re.DOTALL)
    s = re.sub(r'\n\s*Coluna\s*\n\s*em\s+Branco.*$', '', s, flags=re.DOTALL)
    # Remove tags HTML de sublinhado para comparação de texto
    s = re.sub(r'</?u>', '', s)
    s = re.sub(r'[ \t\u2000-\u200b\u00a0]+', ' ', s)
    s = re.sub(r'\s*\n\s*', ' ', s)
    s = s.strip()
    return s

def extract_all_pages_ordered_text(doc):
    pages_text = {}
    for pno in range(len(doc)):
        page = doc[pno]
        # Ignore header (<50) and footer (>735)
        blocks = [b for b in page.get_text("blocks") if b[1] > 45 and b[3] < 740]
        # Sort by column (left x0 < 280, right x0 >= 280) then y0
        blocks.sort(key=lambda b: (0 if b[0] < 280 else 1, b[1]))
        full_page_text = "\n".join(b[4] for b in blocks)
        pages_text[pno + 1] = {
            "text": full_page_text,
            "blocks": blocks
        }
    return pages_text

def segment_questions_from_pdf(pages_text):
    """
    Segmenta os textos do PDF por questão de 1 a 40, rastreando a página exata.
    """
    # Junta todo o texto contínuo mantendo marcas de página
    full_stream = []
    for pno in range(3, 11): # Questões estão entre as páginas 3 e 10
        blocks = pages_text[pno]["blocks"]
        for b in blocks:
            full_stream.append({
                "page": pno,
                "text": b[4],
                "bbox": (b[0], b[1], b[2], b[3])
            })

    # Localiza inícios de cada questão
    q_regex = re.compile(r'(?:^|\n)\s*(\d{1,2})\.\s*[ \s]*')
    
    question_segments = {}
    current_q = None
    accumulated_text = []
    start_page = None

    for item in full_stream:
        text = item["text"]
        page = item["page"]
        
        # Procura se há um número de questão iniciando um bloco ou parágrafo
        lines = text.split("\n")
        for line in lines:
            m = re.match(r'^\s*(\d{1,2})\.\s*[ \s]*(.*)$', line)
            # Verifica se o número é sequencial esperado
            if m:
                num = int(m.group(1))
                expected = 1 if current_q is None else current_q + 1
                if num == expected and num <= 40:
                    if current_q is not None:
                        question_segments[current_q] = {
                            "page": start_page,
                            "raw_text": "\n".join(accumulated_text).strip()
                        }
                    current_q = num
                    start_page = page
                    accumulated_text = [line]
                    continue
            if current_q is not None:
                accumulated_text.append(line)

    if current_q is not None and current_q not in question_segments:
        question_segments[current_q] = {
            "page": start_page,
            "raw_text": "\n".join(accumulated_text).strip()
        }

    return question_segments

def analyze_question(q_num, pdf_data, json_q):
    raw_pdf = pdf_data.get("raw_text", "")
    page_pdf = pdf_data.get("page", 0)

    gabarito_oficial = OFFICIAL_GABARITO_6M02.get(q_num)
    json_gabarito = json_q.get("gabarito", "").upper()

    gabarito_match = (gabarito_oficial == json_gabarito)

    # Separação de alternativas do PDF
    # Procura marcas 'a.', 'b.', 'c.', 'd.', 'e.'
    alt_regex = re.compile(r'(?:^|\n)\s*([a-e])\.\s*(?:Check-square|SQUARE|\u25a0|\u25a1)?\s*(.*?)(?=(?:\n\s*[a-e]\.\s*)|$)', re.DOTALL)
    pdf_alts = {}
    statement_pdf = raw_pdf
    for match in alt_regex.finditer(raw_pdf):
        letter = match.group(1).upper()
        content = clean_spacing(match.group(2))
        pdf_alts[letter] = content

    if pdf_alts:
        first_alt_pos = min(m.start() for m in alt_regex.finditer(raw_pdf))
        statement_pdf = raw_pdf[:first_alt_pos].strip()

    # Limpeza de cabeçalhos de questão do PDF
    clean_statement_pdf = re.sub(r'^\s*\d{1,2}\.\s*[ \s]*', '', statement_pdf).strip()

    # Compara enunciado JSON vs PDF
    # No JSON, pode conter o [Texto 1] embutido ou referência de questão
    json_enunciado = json_q.get("enunciado", "")
    
    # Extrai o comando da questão do JSON (após eventuais textos de apoio markdown)
    cmd_match = re.search(r'(?:^|\n)\s*(\d{1,2}\.\s*.*)$', json_enunciado, re.DOTALL)
    json_cmd = cmd_match.group(1) if cmd_match else json_enunciado
    clean_json_cmd = re.sub(r'^\s*\d{1,2}\.\s*', '', json_cmd).strip()

    # Divergências de enunciado
    diff_statement = []
    norm_pdf_stmt = clean_spacing(clean_statement_pdf)
    norm_json_cmd = clean_spacing(clean_json_cmd)

    # Similaridade lexical
    matcher = difflib.SequenceMatcher(None, norm_pdf_stmt, norm_json_cmd)
    similarity = matcher.ratio()

    # Compara alternativas
    alt_diffs = {}
    for alt in json_q.get("alternativas", []):
        let = alt["id"].upper()
        json_txt = clean_spacing(alt.get("text", ""))
        pdf_txt = pdf_alts.get(let, "")
        alt_match = (json_txt == pdf_txt)
        if not alt_match:
            # Tolerância se houver apenas diferença de pontuação ou caixa
            alt_diffs[let] = {
                "json": json_txt,
                "pdf": pdf_txt,
                "match": alt_match
            }

    # Elementos especiais detectados no PDF
    has_underlines = ("___" in raw_pdf) or ("<u>" in raw_pdf) or ("lacuna" in raw_pdf.lower())
    has_numbered_items = bool(re.search(r'\n\s*[1-5]\.\s+', statement_pdf))
    has_roman_items = bool(re.search(r'\n\s*(?:I|II|III|IV|V)\s*[-.]', statement_pdf))

    return {
        "numero": q_num,
        "disciplina": get_discipline(q_num),
        "pagina_pdf": page_pdf,
        "gabarito_oficial": gabarito_oficial,
        "gabarito_json": json_gabarito,
        "gabarito_match": gabarito_match,
        "is_annulled": (gabarito_oficial == "X"),
        "similarity_statement": round(similarity, 4),
        "has_underlines": has_underlines,
        "has_numbered_items": has_numbered_items,
        "has_roman_items": has_roman_items,
        "alternativas_discrepantes": alt_diffs,
        "raw_pdf_statement": norm_pdf_stmt,
        "json_statement_cmd": norm_json_cmd,
        "pdf_alts": pdf_alts
    }

def main():
    doc = pymupdf.open(PDF_PATH)
    pages_text = extract_all_pages_ordered_text(doc)
    segments = segment_questions_from_pdf(pages_text)

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        json_data = json.load(f)

    json_by_num = {}
    for idx, q in enumerate(json_data, 1):
        num_m = re.match(r'q-agente_fiscal_tributario_1-(\d+)', q.get("id", ""))
        num = int(num_m.group(1)) if num_m else idx
        json_by_num[num] = q

    print(f"=== RESULTADOS DA CONFERÊNCIA DETALHADA DAS 40 QUESTÕES FEPESE ===")
    results = []
    divergencias_gerais = []

    for q_num in range(1, 41):
        pdf_q = segments.get(q_num, {})
        json_q = json_by_num.get(q_num, {})
        analysis = analyze_question(q_num, pdf_q, json_q)
        results.append(analysis)

        status_icon = "✅" if analysis["gabarito_match"] and len(analysis["alternativas_discrepantes"]) == 0 else "⚠️"
        print(f"Q{q_num:02d} [Pág {analysis['pagina_pdf']:02d}] {analysis['disciplina']}: Gabarito Oficial={analysis['gabarito_oficial']}, JSON={analysis['gabarito_json']} -> {status_icon}")
        
        if not analysis["gabarito_match"]:
            print(f"   DIVERGÊNCIA GABARITO: Oficial={analysis['gabarito_oficial']} vs JSON={analysis['gabarito_json']}")
            divergencias_gerais.append(f"Q{q_num}: divergência de gabarito")

        if analysis["alternativas_discrepantes"]:
            for let, d in analysis["alternativas_discrepantes"].items():
                print(f"   DIVERGÊNCIA ALT {let}:")
                print(f"      PDF : {d['pdf']}")
                print(f"      JSON: {d['json']}")
                divergencias_gerais.append(f"Q{q_num} Alt {let}: discrepância textual")

    out_file = BASE_DIR / "scripts" / "fepese_conferencia_40_questoes.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\nRelatório completo gerado em: {out_file}")
    print(f"Total de questões conferidas: {len(results)}")
    print(f"Total de divergências detectadas: {len(divergencias_gerais)}")

if __name__ == "__main__":
    main()
