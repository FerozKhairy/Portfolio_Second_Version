////////// MENU SCROLL EFFECT ////////////
window.addEventListener("scroll", function () {
    var header = document.querySelector("ul");
    header.classList.toggle("stiky", scrollY > 3);
})

///////////// SMOOTH ANIMATION ON MENU CLICK /////////////
window.onload = () => {
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
        link.addEventListener(("click"), (e) => {
            e.preventDefault();
            document.querySelector(e.target.hash).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

}

///////////// Scroll Animation on images /////////////
document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll("#about-container img, #experience-container img");
    if (!imgs.length) return;
    // thresholds 0..1 for smooth updates
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            const ratio = entry.intersectionRatio;
            // map ratio to scale 0.8 → 1 and opacity 0 → 1
            const scale = 0.8 + 0.2 * ratio;
            const opacity = Math.max(0, Math.min(1, ratio));

            el.style.transform = `scale(${scale})`;
            el.style.opacity = String(opacity);
        });
    }, {
        root: null, // viewport
        rootMargin: "220px 0px 220px 0px", // top offset
        threshold: thresholds
    });

    imgs.forEach(img => observer.observe(img));
});

///////////// Animation for Dashboard Loading /////////////
// This forces the browser to scroll to the top-left corner //
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

