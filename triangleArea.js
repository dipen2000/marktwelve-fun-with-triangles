const baseInput = document.querySelector("#baseInput");
const heightInput = document.querySelector("#heightInput");
const areaBtn = document.querySelector("#areaBtn");
const message = document.querySelector(".message");

areaBtn.addEventListener("click", areaClickHandler);

function areaClickHandler(){
    let baseValue = Number(baseInput.value);
    let heightValue = Number(heightInput.value);
    let area = (1/2)*(baseValue*heightValue);
    message.innerText = `The area of the triangle is ${area}cm`;
}