const inputN1 = document.getElementById('numInput1')! as HTMLInputElement
const inputN2 = document.getElementById('numInput2')! as HTMLInputElement
const addButtonElement = document.querySelector("button")

function addition(n1:number, n2:number) {
  return n1 + n2;
}

addButtonElement.addEventListener("click", () => {
  console.log(addition(+inputN1.value, +inputN2.value)) // convert to number by adding + in front
})