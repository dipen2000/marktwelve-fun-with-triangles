const baseInput = document.querySelector("#baseInput");
const heightInput = document.querySelector("#heightInput");
const areaBtn = document.querySelector("#areaBtn");
const message = document.querySelector(".message");

areaBtn.addEventListener("click", areaClickHandler);

function areaClickHandler(){
    let baseValue = Number(baseInput.value);
    let heightValue = Number(heightInput.value);
    if(baseValue === 0 || heightValue === 0){
        message.innerText = "Please fill both the fields correctly."
    }
    else{
        let area = (1/2)*(baseValue*heightValue).toFixed(2);
        message.innerText = `The area of the triangle is ${area}cm`;
    }
}