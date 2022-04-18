let rock = document.getElementById("first-btn");
let paper = document.getElementById("second-btn");
let scissor = document.getElementById("third-btn");
let Userscore = document.getElementById("User");
let systemscore = document.getElementById("web-score");
let Moves  = document.getElementById("move");
let ResultField = document.getElementById("result");
let OverAll = document.getElementById("overAll");
let RestartBtn = document.getElementById("Restart");
let strtBtn = document.getElementById("start");
let InputField = document.getElementById("Name-field");
let UserName = document.getElementById("name");




let userPoint = 0;
let systemPoint = 0;
let TotalMoves = 5;


rock.disabled = true;
paper.disabled = true;
scissor.disabled = true;

function ChangeUserName(){
    let InputValue = InputField.value;
    if(InputValue == ""){
        alert("Provide a Name!");
    }
    else {
        UserName.innerHTML = `Hello, ${InputValue}`;
        Moves.innerHTML = `You have ${TotalMoves = 5} Moves`;
        Userscore.innerHTML = `You: ${userPoint = 0}`;
        systemscore.innerHTML = `Me: ${systemPoint = 0}`;
        OverAll.innerHTML = "";
        InputField.value = "";
        rock.disabled = false;
        paper.disabled = false;
        scissor.disabled = false;

    }

}

function DecrementMove(){
    Moves.innerHTML = `Remaining Moves: ${TotalMoves = TotalMoves - 1}`;
    if(TotalMoves === 0){
        if(userPoint < systemPoint){
          OverAll.innerHTML = "I Won!";
          TotalMoves = 0;
        }
        else if(userPoint > systemPoint){
           OverAll.innerHTML = "You won!";      
        }
        else if(userPoint == systemPoint){
            OverAll.innerHTML = "Tie!";
        }
        rock.disabled = true;
        scissor.disabled = true;
        paper.disabled = true;

    }
}


function RestartAll(){
    location.reload();
}


function isUserWon(){
    Userscore.innerHTML = `You: ${userPoint = userPoint + 1}`;
}
function isSystemWon(){
    systemscore.innerHTML = `Me: ${systemPoint = systemPoint + 1}`;
}



function Logic(e){
   
let Array = ["rock", "paper", "scissor"];
let Values = Array[Math.floor(Math.random() * Array.length)] 

    if(e.target.value == "rock"){
        if(Values == "scissor"){
            isUserWon();
            DecrementMove();
            ResultField.innerHTML = `${e.target.value} Beats ${Values}`;
        }
        else if(Values == "paper"){
            isSystemWon();
            DecrementMove();
            ResultField.innerHTML = `${Values} beats ${e.target.value}`;
        }
        else if(Values == "rock"){
            alert("tie");
        }
    }
    if(e.target.value == "paper"){
        if(Values == "rock"){
            isUserWon();
            DecrementMove();
            ResultField.innerHTML = `${e.target.value} beats ${Values}`;
        }
        else if(Values == "scissor"){
            isSystemWon();
            DecrementMove();
            ResultField.innerHTML = `${Values} beats ${e.target.value}`;
        }
        else if(Values == "paper"){
            alert("tie");
        }
    }
    if(e.target.value == "scissor"){
        if(Values == "paper"){
            isUserWon();
            DecrementMove();
            ResultField.innerHTML = `${e.target.value} beats ${Values}`;
        }
        else if(Values == "rock"){
            isSystemWon();
            DecrementMove();
            ResultField.innerHTML = `${Values} beats ${e.target.value}`
        }
        else if(Values == "scissor"){
            alert("tie");
        }
    }
}

rock.addEventListener("click", Logic);
paper.addEventListener("click", Logic);
scissor.addEventListener("click", Logic);
strtBtn.addEventListener("click", ChangeUserName);
RestartBtn.addEventListener("click", RestartAll);   