const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contact = document.querySelector(".contact");
        
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  contact.classList.toggle("hid");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


const logo = document.querySelectorAll("#logo path");

      for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`); //To calculate tatal lenght of letter
      }