#!/usr/bin/env python3
"""
Script utilitário para preparar textos de PDFs de provas/gabaritos 
e estruturar em prompts/JSONs no formato do App Concurseiro.
"""

import os
import json

PROVAS_DIR = os.path.join(os.path.dirname(__file__), '..', 'provas_pdf')
GABARITOS_DIR = os.path.join(os.path.dirname(__file__), '..', 'gabaritos_pdf')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'imported')

PROMPT_TEMPLATE = """Você é um especialista em concursos públicos. Converta o texto abaixo da prova e do gabarito oficial em um array JSON de questões com o seguinte schema estrito:

[
  {
    "id": "q-banca-001",
    "banca": "FGV", // Ex: FGV, FCC, AOCP, CEBRASPE
    "ano": 2023,
    "orgao": "SEFAZ",
    "cargo": "Auditor Fiscal Tributário",
    "disciplina": "Direito Constitucional",
    "assunto": "Controle de Constitucionalidade",
    "enunciado": "Texto da questão...",
    "alternativas": [
      { "id": "A", "text": "Texto opção A" },
      { "id": "B", "text": "Texto opção B" },
      { "id": "C", "text": "Texto opção C" },
      { "id": "D", "text": "Texto opção D" },
      { "id": "E", "text": "Texto opção E" }
    ],
    "gabarito": "C",
    "explicacao": "Explicação detalhada da resolução...",
    "baseLegal": "Art. 5º, LXVIII da CF/88"
  }
]

Retorne SOMENTE o JSON válido sem marcações markdown de código adicionais.
"""

def generate_instructions():
    print("=== FERRAMENTA DE INGESTÃO DE PROVAS PDF EM JSON ===")
    print(f"Provas encontradas na pasta: {len(os.listdir(PROVAS_DIR))} arquivos")
    print(f"Gabaritos encontrados na pasta: {len(os.listdir(GABARITOS_DIR))} arquivos")
    print("\nVocê pode utilizar o Prompt Template abaixo no Gemini/Claude para converter suas provas em JSONs importáveis diretamente no App Concurseiro:\n")
    print(PROMPT_TEMPLATE)

if __name__ == '__main__':
    generate_instructions()
