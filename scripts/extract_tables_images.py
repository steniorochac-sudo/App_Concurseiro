import os
import fitz
from PIL import Image
import io

os.makedirs('public/questoes/analista_contabil2', exist_ok=True)
os.makedirs('public/questoes/analista_contabil3', exist_ok=True)

# analista_contabil2
doc2 = fitz.open('provas_pdf/analista_contabil2.pdf')
p8_2 = doc2[7]
pix50 = fitz.Pixmap(doc2, 50)
if pix50.n >= 5:
    pix50 = fitz.Pixmap(fitz.csRGB, pix50)
pix50.save('public/questoes/analista_contabil2/tabela_balanco_patrimonial_p8.png')

pix51 = fitz.Pixmap(doc2, 51)
if pix51.n >= 5:
    pix51 = fitz.Pixmap(fitz.csRGB, pix51)
pix51.save('public/questoes/analista_contabil2/tabela_dre_p8.png')
print("Saved analista_contabil2 images.")

# analista_contabil3
doc3 = fitz.open('provas_pdf/analista_contabil3.pdf')
p8_3 = doc3[7]
pix44 = fitz.Pixmap(doc3, 44)
if pix44.n >= 5:
    pix44 = fitz.Pixmap(fitz.csRGB, pix44)
pix44.save('public/questoes/analista_contabil3/tabela_balanco_patrimonial_p8.png')

pix45 = fitz.Pixmap(doc3, 45)
if pix45.n >= 5:
    pix45 = fitz.Pixmap(fitz.csRGB, pix45)
pix45.save('public/questoes/analista_contabil3/tabela_dre_p8.png')
print("Saved analista_contabil3 images.")
