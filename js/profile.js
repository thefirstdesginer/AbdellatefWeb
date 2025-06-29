const lightbox = GLightbox({
    selector: '.glightbox'
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (typeof GLightbox === "function") {
    const lightbox = GLightbox({ selector: '.glightbox' });
}

const langToggle = document.getElementById("langToggle");

let swiperInstance = null;
let heroSwiperInstance = null;

AOS.init({
    once: true,
});


