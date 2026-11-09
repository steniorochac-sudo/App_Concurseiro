import unittest
from pathlib import Path
import json

from scripts.audit_manifest_7_exams import (
    triagem_lexical_auxiliar,
    conferencia_documental_estrita,
    extract_tokens,
    PROVAS_DIR,
)

class TestTextualFidelityNegative(unittest.TestCase):
    """
    TESTE NEGATIVO OBRIGATÓRIO (Pendência 1 - 4ª Auditoria Externa):
    Demonstra que um JSON propositalmente adulterado, mesmo preservando grande parte
    do vocabulário original (aprovado na triagem lexical preliminar > 70%),
    NÃO PODE receber o estado de fidelidade documental integral nem homologação.
    """

    def setUp(self):
        self.pdf_path = PROVAS_DIR / "fiscal_municipal_tributario.pdf"
        self.assertTrue(self.pdf_path.exists(), "PDF oficial deve existir para o teste")

    def test_json_adulterado_com_alto_vocabulario_rejeita_fidelidade_integral(self):
        # Questão 1 original trata de Direito Constitucional / Princípios Tributários.
        # Criamos uma questão propositalmente adulterada, preservando a quase totalidade
        # das palavras e termos jurídicos autênticos presentes no PDF da prova,
        # porém com inversão semântica (inserção de NÃO, adulteração de alternativa e omissão de elementos).
        questao_adulterada = {
            "id": "teste-negativo-adulterada-q01",
            "numeroOriginal": 1,
            "tipo": "multipla_escolha",
            # Enunciado usa o vocabulário da prova oficial, mas inverte o sentido com negação
            "enunciado": (
                "De acordo com a Constituição Federal e o Código Tributário Municipal, "
                "a fiscalização tributária NÃO compete ao Fiscal Municipal Tributário "
                "sendo absolutamente VEDADA a verificação do lançamento tributário."
            ),
            "alternativas": [
                {"id": "A", "text": "Competência tributária privativa municipal."},
                {"id": "B", "text": "Isenção tributária legalmente prevista."},
                {"id": "C", "text": "Lançamento de ofício do imposto sobre serviços."},
                {"id": "D", "text": "Dívida ativa regularmente inscrita no município."},
            ],
            "gabaritoOficial": "A",
            "gabaritoStatus": "valido",
            "metadados": {
                "disciplina": "Direito Tributário",
                "paginaOrigem": 2,
            }
        }

        questoes = [questao_adulterada]

        # 1. Executa a triagem lexical auxiliar
        res_triagem = triagem_lexical_auxiliar(questoes, self.pdf_path)

        # O vocabulário quase todo existe no PDF da prova ("constituição", "federal", "código",
        # "tributário", "municipal", "fiscalização", "lançamento", "isenção", "dívida", "ativa").
        # Portanto, a triagem lexical por tokens atinge o limiar de triagem:
        self.assertGreaterEqual(
            res_triagem["questoes_aprovadas"],
            1,
            "A triagem lexical por palavras isoladas foi deliberadamente 'enganada' pelo vocabulário preservado"
        )
        self.assertEqual(res_triagem["status"], "triagem_lexical_aprovada")

        # 2. Executa a conferência documental estrita
        res_conferencia = conferencia_documental_estrita(
            questoes,
            self.pdf_path,
            "fiscal_municipal_tributario.pdf",
            missing_images=[]
        )

        # 3. CRÍTICO: Comprova que a questão adulterada NÃO recebe fidelidade documental concluída!
        self.assertNotEqual(
            res_conferencia["status_documental"],
            "verificacao_documental_concluida",
            "Fidelidade integral JAMAIS pode ser concedida apenas com base no índice lexical!"
        )
        self.assertEqual(
            res_conferencia["status_documental"],
            "verificacao_documental_pendente"
        )
        self.assertEqual(res_conferencia["questoes_concluidas"], 0)
        self.assertEqual(res_conferencia["questoes_pendentes"], 1)

        # 4. As pendências explícitas devem registrar a exigência de conferência documental
        pendencias_q = res_conferencia["detalhe_questoes"][0]["pendencias"]
        self.assertTrue(
            any("fase documental dedicada" in p for p in pendencias_q),
            "Deve registrar pendência explícita de conferência documental"
        )

    def test_questao_com_elementos_visuais_nao_presume_fidelidade(self):
        # Questão com tabela e imagem: texto pode até existir, mas fidelidade de layout e ativos visuais não é presumida
        q_visual = {
            "id": "teste-visual-q02",
            "numeroOriginal": 2,
            "tipo": "multipla_escolha",
            "enunciado": "Considere o gráfico a seguir: ![Gráfico](/assets/grafico.png) e a tabela | Ano | Valor |",
            "alternativas": [
                {"id": "A", "text": "Opção A"},
                {"id": "B", "text": "Opção B"},
                {"id": "C", "text": "Opção C"},
                {"id": "D", "text": "Opção D"},
            ],
            "gabaritoOficial": "A",
            "gabaritoStatus": "valido",
            "imagens": ["/assets/grafico.png"],
        }

        res = conferencia_documental_estrita([q_visual], self.pdf_path, "fiscal_municipal_tributario.pdf")
        detalhes = res["detalhe_questoes"][0]

        # Elementos visuais foram detectados
        self.assertTrue(detalhes["elementos_visuais_identificados"]["tem_imagens"])
        self.assertTrue(detalhes["elementos_visuais_identificados"]["tem_tabelas"])

        # Fidelidade visual não foi presumida
        self.assertEqual(detalhes["status_documental"], "verificacao_documental_pendente")
        self.assertTrue(
            any("Elemento visual (imagem)" in p for p in detalhes["pendencias"])
        )
        self.assertTrue(
            any("Elemento estrutural (tabela)" in p for p in detalhes["pendencias"])
        )

if __name__ == "__main__":
    unittest.main()
