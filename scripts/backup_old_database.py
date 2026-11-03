import os
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

SRC_DATA_DIR = r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro\src\data"
IMPORTED_DIR = os.path.join(SRC_DATA_DIR, "imported")
BACKUP_DIR = os.path.join(SRC_DATA_DIR, "backup_antigo")

if os.path.exists(IMPORTED_DIR):
    if os.path.exists(BACKUP_DIR):
        shutil.rmtree(BACKUP_DIR)
    shutil.copytree(IMPORTED_DIR, BACKUP_DIR)
    print(f"✅ Backup realizado com sucesso em: {BACKUP_DIR}")
    print(f"📦 Total de arquivos salvos no backup: {len(os.listdir(BACKUP_DIR))}")
else:
    print("Pasta imported não encontrada.")
