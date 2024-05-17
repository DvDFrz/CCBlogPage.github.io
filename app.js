const hamburgerToggle = document.querySelector("#hamburger-toggle");
const nav = document.querySelector("#navbar");

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
    if (!nav.classList.contains("open")) {
        nav.classList.add("open");
    } else {
        nav.classList.remove("open");
    }
}