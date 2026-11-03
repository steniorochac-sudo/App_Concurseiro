import os
import sys
import pypdf
import re

sys.stdout.reconfigure(encoding='utf-8')

GABARITOS_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\gabaritos_pdf"

def parse_quadrix_gabarito_by_cargo(gabarito_text, cargo_keyword="ANALISTA CONTÁBIL"):
    """Extrai a matriz exata de gabarito para o cargo desejado no PDF da Quadrix."""
    # Encontra a seção do cargo
    pattern = re.compile(rf'(2\.\d+\s+.*?{cargo_keyword}.*?)(?=2\.\d+|\Z)', re.DOTALL | re.IGNORECASE)
    match = pattern.search(gabarito_text)
    
    section_text = match.group(1) if match else gabarito_text
    
    # Encontra pares de linha de números e linha de letras
    # Exemplo:
    # 1 2 3 4 ... 20
    # E C E C ... C
    lines = [l.strip() for l in section_text.split('\n') if l.strip()]
    
    matrix = {}
    for i in range(len(lines) - 1):
        num_line = lines[i]
        let_line = lines[i+1]
        
        nums = [int(n) for n in num_line.split() if n.isdigit() and int(n) <= 120]
        lets = [l.upper() for l in let_line.split() if l.upper() in ['C', 'E', 'A', 'B', 'D', 'X', 'N']]
        
        if len(nums) > 0 and len(nums) == len(lets):
            for n, l in zip(nums, lets):
                matrix[n] = l
                
    return matrix

g_path = os.path.join(GABARITOS_DIR, "gabarito_analista_contabil.pdf")
reader = pypdf.PdfReader(g_path)
full_text = ""
for p in reader.pages:
    full_text += (p.extract_text() or "") + "\n"

m = parse_quadrix_gabarito_by_cargo(full_text, "ANALISTA CONTÁBIL")
print(f"Gabarito extraído com sucesso para ANALISTA CONTÁBIL ({len(m)} itens):")
for q in [1, 2, 35, 36, 37, 71, 72, 120]:
    print(f" Item {q}: {m.get(q)} (Gabarito: {'A (CERTO)' if m.get(q) == 'C' else 'B (ERRADO)' if m.get(q) == 'E' else m.get(q)})")
