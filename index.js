var inputN1 = document.getElementById('numInput1');
var inputN2 = document.getElementById('numInput2');
var addButtonElement = document.querySelector("button");
function addition(n1, n2) {
    return n1 + n2;
}
addButtonElement.addEventListener("click", function () {
    console.log(addition(+inputN1.value, +inputN2.value)); // convert to number by adding + in front
});
