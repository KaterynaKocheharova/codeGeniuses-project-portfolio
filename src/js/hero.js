
const heroTitle = document.getElementById("heroTitle");

function animateOnScroll() {
    const rect = heroTitle.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    if (rect.top >= 0 && rect.bottom <= viewHeight) {
        heroTitle.classList.add("show"); 
    } else {
        heroTitle.classList.remove("show");
    }
}

document.addEventListener("DOMContentLoaded", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
