const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);

const btn = document.querySelector(".btn");
const input = document.querySelector("#input");

const form = document.querySelector("#form");

const scoreEl = document.querySelector("#score");
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEl.innerText= `Score: ${score}`;

const question = document.getElementById("question");

const ans = num1*num2;
question.innerText=`${num1} X ${num2} = ? `;

form.addEventListener("submit",()=>{
    const userAns = +input.value;   // string to number
    if(userAns===ans){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()

    }
})

function updateLocalStorage() {
    localStorage.setItem("score",JSON.stringify(score))
}