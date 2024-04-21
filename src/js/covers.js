const elements = document.querySelectorAll(".film-element")

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
const intersecting = entry.isIntersecting
if (intersecting) {
for (const element of elements )
element.classList.add('covers-show')
} else { 
for (const element of elements )
element.classList.remove('covers-show')
}
})
}, { rootMargin: "-50px" })

observer.observe(document.getElementById("covers"))
