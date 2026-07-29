const toggle = document.getElementById("menu-toggle");
const links = document.querySelectorAll('nav a');
const currentPage = window.location.pathname;

links.forEach(link => {
    link.addEventListener("click", () => {
        toggle.checked = false;
    });
});


function setActiveLink() {
    const currentHash = window.location.hash || "#home";

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === currentHash) {
            link.classList.add("active");
        }
    });
}
setActiveLink();
window.addEventListener("hashchange", setActiveLink);


const scriptURL = 'https://script.google.com/macros/s/AKfycbxeYyAT4YofNFX4K6z9M2MkUCZ_yHIvHGTMD83yYOu0rAcTMtxaz0IT7WVYzsuuinGlbw/exec'
const form = document.getElementById('contactForm')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})