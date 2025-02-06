// Voer de functie pas uit als alle content is geladen
document.addEventListener("DOMContentLoaded", function () {
    // Selecteer alle buttons als "expandable"
    const buttons = document.querySelectorAll(".expandable");

    // Loop door alle gevonden knoppen
    buttons.forEach(function (button) {
        // Voeg een klik event listener toe aan elke knop
        button.addEventListener("click", function () {
            // Toggle de class "expanded" als er op de knop geklikt wordt
            button.classList.toggle("expanded");
        });
    });
});
