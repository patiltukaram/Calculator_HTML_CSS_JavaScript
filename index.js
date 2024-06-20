let display = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");

let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            display.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            display.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (e.target.innerHTML == "%") {
            let percentage = eval(string / 100);
            display.value = percentage;
        } else {
            console.log(e.target);
            string = string += e.target.innerHTML;
            display.value = string;
        }
    })
});