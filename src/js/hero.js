// Функція, яка викликає відкриття поштової програми з вказаною адресою
function sendEmail() {
    var emailLink = document.getElementById("emailLink");
    var email = emailLink.href;
    window.location.href = email;
}


function fadeInFromBottom(element, duration) {
    element.style.opacity = 0;
    element.style.transform = "translateY(100%)"; // Початкова позиція поза межами екрану внизу
    element.style.transition = `opacity ${duration / 1000}s, transform ${duration / 1000}s`;

    setTimeout(function() {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    }, 100); // Затримка перед запуском анімації

    setTimeout(function() {
        element.style.transition = ""; // Видалення переходів після завершення анімації
    }, duration);
}

// Отримання елемента заголовка
var heroTitle = document.getElementById("heroTitle");

// Запуск анімації з'явлення знизу вгору при кожному поверненні на секцію
function animateOnScroll() {
    var rect = heroTitle.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    // Перевірка чи елемент повністю видимий на екрані
    if (rect.top >= 0 && rect.bottom <= viewHeight) {
        fadeInFromBottom(heroTitle, 1000); // Тут ви можете змінити тривалість анімації за потребою
    }
}

// Виклик функції при завантаженні сторінки та при скролі
document.addEventListener("DOMContentLoaded", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
