import sys

sys.stdout.reconfigure(encoding='utf-8')

for pkg in ['fitz', 'pymupdf', 'PIL', 'pdf2image', 'pypdf']:
    try:
        __import__(pkg)
        print(f"✅ {pkg}: instalado")
    except ImportError:
        print(f"❌ {pkg}: não instalado")
