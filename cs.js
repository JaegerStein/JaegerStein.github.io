console.log("alive");

let buttons = document.querySelectorAll(".right button");
console.log(buttons);
buttons.forEach(element => element.addEventListener("click", handleClick));

function handleClick(event) {
    let element = event.target;
    let target = element.parentNode.querySelector(".value");
    if (element.className === "plus") increment(target); else decrement(target);
}

function change(value, target) {
    value ? target.textContent++ : target.textContent--; // how tf does this work, it's amazing
}

function increment(target) {
    if (target.textContent < 20) change(true, target);
}

function decrement(target) {
    if (target.textContent > 1) change(false, target)
}