let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg"); 

const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score"); 
let newgamebtn = document.querySelector("#new-btn");
 


const gencompchoice = () => {
    const options = ["rock" , "paper" , "sissor"];
   const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawgame = () => {
    
    msg.innerText = "Game was Draw..Play again..";
    
    
}

const showwinner = (userwin , userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You won!!`;
        msg.style.backgroundColor = "Green";
}else{
    computerscore++;
    computerscorepara.innerText = computerscore;

    msg.innerText = `You lost! Damn it ! You lost!!!!`;
    msg.style.backgroundColor = "Red";
}
}

const playgame = (userchoice) => {
  console.log("userchoice = ", userchoice)
  //generate computer choice
const compchoice = gencompchoice();
console.log("comp choice = " , compchoice);
 if (userchoice === compchoice){
    //Drawgame
    drawgame();
 } else {
    let userwin = true;
    if (userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    } else if(userchoice === "paper") {
        userwin = compchoice === "sissor" ? false : true;
    } else{
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin , userchoice, compchoice);
 }

};


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
   const userchoice = choice.getAttribute("id");
   playgame(userchoice);
    });
});

;
