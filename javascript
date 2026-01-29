// تفعيل تبديل الوضع الداكن/الفاتح
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// التحقق من التفضيل المحفوظ
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// تبديل الوضع عند النقر
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// تأثيرات التمرير للبطاقات
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// تطبيق المراقبة على البطاقات
document.querySelectorAll('.philosophy-card, .option-card').forEach(card => {
    observer.observe(card);
});

// تأثيرات الفقاعات التفاعلية
const bubbles = document.querySelectorAll('.thought-bubble');

bubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', () => {
        bubble.style.transform = 'scale(1.1)';
        bubble.style.zIndex = '10';
    });
    
    bubble.addEventListener('mouseleave', () => {
        bubble.style.transform = 'scale(1)';
        bubble.style.zIndex = '1';
    });
});

// تحميل ديناميكي للمحتوى (مثال)
async function loadContent() {
    try {
        // يمكنك هنا جلب محتوى ديناميكي من ملفات JSON أو APIs
        console.log('جاري تحميل المحتوى...');
        
        // مثال: جلب وصف المشروع من ملف نصي
        // const response = await fetch('description.txt');
        // const data = await response.text();
        // document.getElementById('project-description').textContent = data;
    } catch (error) {
        console.error('حدث خطأ في تحميل المحتوى:', error);
    }
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    console.log('صفحة "خروج من كهف اللغة" جاهزة!');
    
    // تحميل المحتوى الديناميكي
    loadContent();
    
    // إظهار رسالة ترحيب
    setTimeout(() => {
        console.log('مرحباً بك في رحلة استكشاف ما قبل اللغة!');
    }, 1000);
});

// دالة للمساعدة في إضافة محتوى جديد
function addContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML += content;
    }
}

// تصدير الدوال للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme: themeToggle,
        smoothScroll: true,
        observer: observer
    };
}
