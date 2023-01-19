const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav-Menu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav-menu.classList.remove("active");

}))