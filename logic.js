
let choices = document.querySelectorAll(".circle");
let win = document.querySelector(".cong");
let youScore = document.querySelector("#score1");
let compScore = document.querySelector("#score2");
let userScore = 0;
let compScard = 0;

const genComp = () =>{
    let options = ["rock", "paper", "scissor"];
    let indexNum = Math.floor(Math.random()*3);
    return options[indexNum];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    //    let two = genComp();
    //    console.log(userChoice);
    //    console.log(two)
        choice.onClick = true;
        
    })
})

const playGame = (userChoice) => {
    let two = genComp();
    console.log(two);
    console.log(userChoice)
    if((userChoice === "paper" && two === "rock") || (userChoice === "rock" && two === "scissor") || (userChoice === "scissor" && two === "paper")){
        win.classList.remove("cong2");
        win.innerText = `You Won!! ${userChoice} beats the ${two}`;
        win.style.backgroundColor = "green";
        userScore++;
        youScore.innerText = userScore;
        // choices.onClick = null;
    }
    else if(userChoice === two){
        win.classList.remove("cong2");
        win.innerText = "OOPS!! It's Draw";
        win.style.backgroundColor = "grey";
        // choices.onClick = null;
    }
    else{
        win.classList.remove("cong2");
        win.innerText = `You lost!! ${two} beats the ${userChoice}`;
        win.style.backgroundColor = "red";
        compScard++;
        compScore.innerText = compScard;
        // choices.onClick = null;
    }
}

