document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.transform = "scale(0.98)";

            setTimeout(() => {
                card.style.transform = "";
            }, 150);
        });
    });
});