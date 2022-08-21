console.log("alive");

/*** BEGIN ATTRIBUTE BUTTONS***/

const buttons = document.querySelectorAll(".wrapper button");
buttons.forEach(element => element.addEventListener("click", handleClick));

function handleClick(event) {
    const element = event.target;
    const target = element.parentElement.querySelector(".real.value");
    if (element.className === "increment") increment(target); else decrement(target);
    updateModifier(target, element.parentElement.previousElementSibling.previousElementSibling);
}

function change(value, target) {
    value ? target.textContent++ : target.textContent--; // how tf does this work, it's amazing
}

function increment(target) {
    if (target.textContent < 20) change(true, target);
}

function decrement(target) {
    if (target.textContent > 0) change(false, target)
}

function updateModifier(real, mod) {
    const val = real.textContent - 10;
    mod.textContent = val > 0 ? "+" + val : val;
}

/*** END ATTRIBUTE BUTTONS ***/