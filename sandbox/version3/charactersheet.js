console.log("alive");

/*** BEGIN ATTRIBUTE BUTTONS***/

const unsignedButtons = document.querySelectorAll(".wrapper button.unsigned");
const signedButtons = document.querySelectorAll(".wrapper button.signed");

unsignedButtons.forEach(button => button.addEventListener("click", handleUnsignedClick));
signedButtons.forEach(button => button.addEventListener("click", handleSignedClick));

function handleUnsignedClick(event) {
    const [element, target] = elementTarget(event);
    handle(element, target, false);
    updateModifier(target.textContent, element.parentElement.previousElementSibling.previousElementSibling);
}

function handleSignedClick(event) {
    const [element, target] = elementTarget(event);
    handle(element, target, true);
    updateModifier(Number(target.textContent) + 10, target);
}

function handle(element, target, signed) {
    element.classList.contains('increment') ? increment(target, signed) : decrement(target, signed);
}

function elementTarget(event) {
    const element = event.target;
    return [element, element.parentElement.querySelector(".change.value")];
}

function change(inc, target) {
    inc ? target.textContent++ : target.textContent--; // how tf does this work, it's amazing
}

function increment(target, signed) {
    if ((signed && target.textContent < 10) || (!signed && target.textContent < 20)) change(true, target);
}

function decrement(target, signed) {
    if ((signed && target.textContent > -10) || (!signed && target.textContent > 0)) change(false, target);
}

function updateModifier(value, target) {
    console.log(value)
    console.log(target)
    const val = value - 10;
    target.textContent = val > 0 ? "+" + val : val;
}

/*** END ATTRIBUTE BUTTONS ***/

function enterAbility(event) {

}