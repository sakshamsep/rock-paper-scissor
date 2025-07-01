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

function PlayRound (NumberOfRound)

{
for ( let i = 0 ; i < NumberOfRound ; i++)
{

    RandomChoice();
UserChoice();
if (result === "rock")
{
    if (user === "rock") {console.log("Duh! There is a tie")}
    else  if (user === "paper") { console.log("YOU WON!!!!") ; HumanScore++;}
    else  if (user === "scissor") {console.log("YOU LOSE :(");ComputerScore++;}
}

if (result === "paper")
{
    if (user === "paper") {console.log("Duh! There is a tie")}
    else if (user === "scissor") { console.log("YOU WON!!!!"); HumanScore++;}
    else if (user === "rock") {console.log("YOU LOSE :(") ; ComputerScore++;}
}


if (result === "scissor")
{
    if (user === "scissor") {console.log("Duh! There is a tie")}
    else  if (user === "rock") { console.log("YOU WON!!!!"); HumanScore++;}
    else  if (user === "paper") {console.log("YOU LOSE :(") ; ComputerScore++;}
}

}
console.log (`Final scores are : Computer : ${ComputerScore} Human : ${HumanScore}`)

}

PlayRound(5);
