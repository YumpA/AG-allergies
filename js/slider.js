const slider = document.querySelector(".slider__items");
const next = document.querySelector(".next");

let current = 1;
let maxSlide = 5;
let widthSlide = 430;

next.addEventListener("click", () => {
    let shift = -current*widthSlide;
    if (current < maxSlide - 1){
        current++;
    }
    else {
        next.setAttribute("disabled", "true");
    }
    slider.style.transform = `translateX(${shift}px)`;
})