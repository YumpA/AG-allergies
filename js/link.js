const button = document.querySelector(".button-next");
const link = document.querySelector(".link-invis");

var count = 0;

function countClick () {
    count+=1;
        if (count == 4) {
            // button.classList.remove('.button-next');
            button.classList.toggle('button-next-invis');
            link.classList.toggle('link-vis');    
        }
}