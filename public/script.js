document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".expandable");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("expanded");
        });
    });
});
