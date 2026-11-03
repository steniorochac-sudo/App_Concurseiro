import os
import sys
import pypdf
import re
from master_exam_builder import parse_exam_master
from exam_mappings import EXAM_MAPPINGS

sys.stdout.reconfigure(encoding='utf-8')

for exam in EXAM_MAPPINGS:
    if "fiscal_tributario6" in exam['prova']:
        qs = parse_exam_master(exam)
        print(f"Resultado fiscal_tributario6: {len(qs)} questões.")
