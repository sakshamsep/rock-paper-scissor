function random(max) 
{
    return Math.floor(Math.random()* max);
   
}
console.log(random(100));
let result;let ComputerScore = 0;let HumanScore = 0;
function RandomChoice()
{
     if (random(100) % 3 === 0) 
        {
            result = "rock";
        }   
         else if (random(100) % 5 === 0) 
        {
            result = "paper";
        }   

        else
        {
            result = "scissor";
        } 
        console.log(`computer choose ${result}`);  
}
let user;


        function UserChoice()
{
    user = prompt("enter your weapon : rock or paper or scissor");
    user = user.toLowerCase();
    console.log(`you choose ${user}`);  
}



function playRound()

{

 RandomChoice();
// UserChoice();
if (result === "rock")
{
    if (user === "rock") { (roundresult.textContent = "tie"); compchoice.textContent = `Computer choice : ${result}`;}
    else  if (user === "paper") { roundresult.textContent = "YOU WON GURL";compchoice.textContent = `Computer choice : ${result}`; HumanScore++;}
    else  if (user === "scissor") { roundresult.textContent = "lost,NOT SLAY :(";compchoice.textContent = `Computer choice : ${result}`; ComputerScore++;}
}

if (result === "paper")
{
    if (user === "paper") {(roundresult.textContent = "tie");compchoice.textContent = `Computer choice : ${result}`;}
    else if (user === "scissor") { roundresult.textContent = "YOU WON GURL";compchoice.textContent = `Computer choice : ${result}`; HumanScore++;}
    else if (user === "rock") { roundresult.textContent = "lost,NOT SLAY :(" ;compchoice.textContent = `Computer choice : ${result}`; ComputerScore++;}
}


if (result === "scissor")
{
    if (user === "scissor") {(roundresult.textContent = "tie");compchoice.textContent = `Computer choice : ${result}`;}
    else  if (user === "rock") { roundresult.textContent = "YOU WON GURL";compchoice.textContent = `Computer choice : ${result}`; HumanScore++;}
    else  if (user === "paper") { roundresult.textContent = "lost,NOT SLAY :(" ;compchoice.textContent = `Computer choice : ${result}`; ComputerScore++;}
}


updateScore();
showResult( HumanScore,ComputerScore)
}

const btnRock = document.querySelector(".rock");
btnRock.addEventListener("click", () => {
    user = "rock";playRound();
})

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener("click", () => {
    user = "paper";playRound();
})

const btnScissor = document.querySelector(".scissor");
btnScissor.addEventListener("click", () => {
    user = "scissor";playRound();
}
)
const currentscore = document.querySelector(".currentscore");
const compchoice = document.querySelector(".comp");

const results = document.querySelector(".results");
const computerPara = document.createTextNode("COMPUTER won!!!");
const humanPara = document.createTextNode("HUMAN won!!!");


const roundresult = document.querySelector(".roundresult");

function updateScore() {
    currentscore.textContent = `Current points: Computer: ${ComputerScore} Human: ${HumanScore}`;
}
function showResult( HumanScore,ComputerScore)
{
   
    
    if ( HumanScore == 5)
       { results.appendChild(humanPara);
        btnPaper.disabled = true;
        btnRock.disabled = true;
        btnScissor.disabled = true;
        return 0; 
        
       }

     else if ( ComputerScore == 5)
         {results.appendChild(computerPara);
            btnPaper.disabled = true;
        btnRock.disabled = true;
        btnScissor.disabled = true;
        return 0;}

        
}