def detect_text_distortion(text):
    # الكشف عن اختلاف اتجاهات النص (مثال: وجود حروف عربية ولاتينية معًا)
    has_rtl = any('\u0600' <= char <= '\u06FF' for char in text)  # نطاق الحروف العربية
    has_ltr = any(char.isascii() for char in text)  # الحروف اللاتينية
    
    if has_rtl and has_ltr:
        return "mixed_direction"
    
    # يمكن إضافة كشف لانعكاس الترتيب etc.
    return "normal"