document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("card");

    card.addEventListener("click", function () {
        card.classList.toggle("flipped");
        card.classList.toggle("hover-rotate"); // Ajoute la classe pour l'animation hover
    });
});
