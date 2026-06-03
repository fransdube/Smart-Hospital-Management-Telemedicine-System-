import os
import pytesseract
from PIL import Image

image_dir = "/tmp/file_attachments"
files = [f for f in os.listdir(image_dir) if f.endswith(".jpg")]
files.sort()

for f in files:
    path = os.path.join(image_dir, f)
    text = pytesseract.image_to_string(Image.open(path))
    print(f"--- File: {f} ---")
    print(text)
    print("\n" + "="*50 + "\n")
