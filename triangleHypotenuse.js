const hypotenuseBtn = document.querySelector("#hypotenuseBtn");
const sideOneInput = document.querySelector("#sideOne");
const sideTwoInput = document.querySelector("#sideTwo");
const message = document.querySelector(".message");

hypotenuseBtn.addEventListener("click" , calculateHypotenuse);

function calculateHypotenuse(){
    let sideOne = Number(sideOneInput.value)
    let sideTwo = Number(sideTwoInput.value);
    if(sideOne === 0 || sideTwo === 0){
        message.innerText = "Please fill both the fields correctly."
    }
    else{
        let sum = Math.pow(sideOne , 2) + Math.pow(sideTwo , 2);
        let hypotenuse = Math.sqrt(sum).toFixed(2);
        message.innerText = `The Hypotenuse is ${hypotenuse}`;
    }
    
}