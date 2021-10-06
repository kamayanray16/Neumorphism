const frameChanger = document.querySelector(".swiper");
const woodenBtn = document.getElementById("woodenBtn");
const designerBtn = document.getElementById("designerBtn");
const blackBtn = document.getElementById("blackBtn");
const whiteBtn = document.getElementById("whiteBtn");



woodenBtn.addEventListener("click", () => {
    frameChanger.classList.add("wooden-frame");
    frameChanger.classList.remove("designer-frame");
    frameChanger.classList.remove("white-frame");
  });
  
  designerBtn.addEventListener("click", () => {
    frameChanger.classList.add("designer-frame");
    frameChanger.classList.remove("wooden-frame");
    frameChanger.classList.remove("white-frame");
  });
  
  blackBtn.addEventListener("click", () => {
    frameChanger.classList.remove("wooden-frame");
    frameChanger.classList.remove("designer-frame");
    frameChanger.classList.remove("white-frame");
  });
  
  whiteBtn.addEventListener("click", () => {
    frameChanger.classList.add("white-frame");
    frameChanger.classList.remove("wooden-frame");
    frameChanger.classList.remove("designer-frame");
  });
  