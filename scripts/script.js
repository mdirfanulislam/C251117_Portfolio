const toggle = document.getElementById('menu-toggle');
const navlink = document.querySelectorAll('nav a');
const links = document.querySelectorAll('nav a');
const currentPage = window.location.pathname;

if (toggle) {
    addEventListener("change", () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });

    navlink.forEach(link => {
        link.addEventListener("click", () => {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        });
    });
}

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