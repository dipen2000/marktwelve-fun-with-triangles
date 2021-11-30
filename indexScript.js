const angleOneInput = document.querySelector("#angle-one-input");
const angleTwoInput = document.querySelector("#angle-two-input");
const angleThreeInput = document.querySelector("#angle-three-input");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector(".message");
console.log(angleOneInput,angleTwoInput,angleThreeInput);

checkBtn.addEventListener("click" , checkClickListner);

function checkClickListner(){
    let angleOne = Number(angleOneInput.value);
    let angleTwo = Number(angleTwoInput.value);
    let angleThree = Number(angleThreeInput.value);
    isTriangle(angleOne , angleTwo , angleThree);    
}

function isTriangle(angleOne , angleTwo , angleThree){
    let sum = angleOne + angleTwo + angleThree;
    console.log(sum);
    if(angleOne === 0 || angleTwo === 0 || angleThree === 0){
        message.innerText = "Please fill all the fields."
    }
    else if(angleOne < 0 || angleTwo < 0 || angleThree < 0){
        message.innerText = "Please enter valid inputs";
    }
    else if(sum === 180){
        message.innerText = "It is a triangle!";
    }
    else{
        message.innerText = "It is not a triangle!";
    }
}