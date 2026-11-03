import os
import sys
import shutil

sys.stdout.reconfigure(encoding='utf-8')

IMPORTED_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\imported"
BACKUP_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data\backup_antigo"

# As 4 provas piloto que foram geradas com visão pelo Gemini 3.7 Flash
PILOT_FILES = [
    "fiscal_tributario5.json",
    "fiscal_tributario3.json",
    "prova_objetiva_auditor.json",
    "analista_contabil.json"
]

# Remove todos os arquivos antigos que não sejam os 4 pilotos novos
for f in os.listdir(IMPORTED_DIR):
    if f.endswith('.json') and f not in PILOT_FILES:
        file_path = os.path.join(IMPORTED_DIR, f)
        os.remove(file_path)
        print(f"🗑️ Removido arquivo antigo: {f}")

print("\n" + "=" * 60)
print(f"✅ Limpeza concluída! Arquivos restantes em imported/ ({len(os.listdir(IMPORTED_DIR))} arquivos):")
for f in os.listdir(IMPORTED_DIR):
    print(f"  • {f}")
