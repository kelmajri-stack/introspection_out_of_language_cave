def detect_linguistic_shift(text):
    # كشف وجود أكثر من لغة في النص
    languages = []
    if any('\u0600' <= char <= '\u06FF' for char in text):
        languages.append('arabic')
    if any('\u4e00' <= char <= '\u9fff' for char in text):
        languages.append('chinese')
    if any(char.isascii() for char in text):
        languages.append('latin')
    return languages

# مثال:
text = "生成 محتوى غير لغوي"
print(detect_linguistic_shift(text))  # ['chinese', 'arabic']