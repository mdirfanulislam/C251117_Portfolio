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