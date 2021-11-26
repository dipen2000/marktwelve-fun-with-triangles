const checkBtn = document.querySelector("#btn");
const quizForm = document.querySelector(".quiz-form");
const message = document.querySelector(".message");
checkBtn.addEventListener("click" , checkClickHandler);

let correctAnswer = ["90°" , "right angled"];
function checkClickHandler(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index++;
    }
    message.innerText = `Score is ${score}`;
}
