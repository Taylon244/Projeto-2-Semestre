
// =================================
// MENU MOBILE
// =================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});


// Fecha o menu ao pressionar ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        nav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

    }

});


// =================================
// ANO AUTOMÁTICO NO RODAPÉ
// =================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =================================
// BOTÃO VOLTAR AO TOPO
// =================================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =================================

const elements = document.querySelectorAll(
    ".section-heading, .history-grid, .family-card, .differential-item, .gallery-item, .contact-item, .instagram-content"
);

elements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


elements.forEach(element => {

    observer.observe(element);

});


// =================================
// DESTAQUE DO MENU DURANTE A NAVEGAÇÃO
// =================================

const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navLinks.forEach(link => {

                link.classList.remove("active-link");

                if (link.getAttribute("href") === "#" + currentId) {

                    link.classList.add("active-link");

                }

            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});


sections.forEach(section => {

    sectionObserver.observe(section);

});


// =================================
// FINALIZAÇÃO
// =================================

console.log("Pizza Paulista 10 - Site carregado com sucesso!");
