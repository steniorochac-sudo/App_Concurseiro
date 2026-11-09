import json
from pathlib import Path

BASE = Path(r"c:\Users\steni\Desktop\Codification\Programas\App_Concurseiro")
imp_dir = BASE / "src" / "data" / "imported"
for p in sorted(imp_dir.glob("*.json")):
    size = p.stat().st_size
    with open(p, "r", encoding="utf-8") as f:
        data = json.load(f)
    is_list = isinstance(data, list)
    count = len(data) if is_list else len(data.get("questoes", []))
    schema = "legacy_array" if is_list else f"ExamDocumentV2 ({data.get('schemaVersion', 'v2')})"
    if is_list:
        sample = data[0] if data else {}
        banca = sample.get("banca", "")
        ano = sample.get("ano", "")
        orgao = sample.get("orgao", "")
        cargo = sample.get("cargo", "")
        exam_id = sample.get("id", "").split("-")[1] if "-" in sample.get("id", "") else ""
        title = f"{orgao} - {cargo} ({banca} {ano})"
    else:
        exam = data.get("exam", {})
        exam_id = exam.get("id", "")
        title = exam.get("titulo", "")
        banca = exam.get("banca", "")
        ano = exam.get("ano", "")
    print(f"File: {p.name}")
    print(f"  Size: {size:,} bytes")
    print(f"  Format: {schema}")
    print(f"  Questions: {count}")
    print(f"  Banca/Ano: {banca} ({ano})")
    print(f"  Title/Desc: {title}")
    print(f"  Exam ID: {exam_id}")
    print("-" * 60)
