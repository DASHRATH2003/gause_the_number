let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate= document.getElementById("inputBox");
 let audio = new Audio('./music/music.wav');
const init =() =>{
    computerGuess =Math.floor(Math.random()*100);
    console.log(computerGuess);
    document.getElementById("newgamebutton").style.display="none";
    document.getElementById("gamearea").style.display="none";
};
const startGame =()=>{  
    document.getElementById("welcomescreen").style.display="none";
    document.getElementById("gamearea").style.display="block";
};
const startNewGame=()=>{
    document.getElementById("newgamebutton").style.display="inline";
    userNumberUpdate.setAttribute('disabled',true);
}
const newGameBeing =()=>{
    window.location.reload();
    audio.play();
}
const compareGuess =()=>{
     audio.play();
    const userNumber =Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

 if(userGuess.length<maxGuess){
    if(userNumber>computerGuess){
       userGuessUpdate.innerHTML ="Your guess is high";
       userNumberUpdate.value ="";
    }else if(userNumber<computerGuess){
        userGuessUpdate.innerHTML ="Your guess is Low ";
        userNumberUpdate.value ="";
    }
    
   

    else{
        userGuessUpdate.innerHTML= "it's correct";
        userNumberUpdate.value ="";
        startNewGame();
    } 





}



else{
    if(userNumber>computerGuess){
        userGuessUpdate.innerHTML =`You Lossy!! correct number was ${computerGuess}`;
        userNumberUpdate.value ="";
        startNewGame();
     }else if(userNumber<computerGuess){
         userGuessUpdate.innerHTML =`You Lossy!! correct number was ${computerGuess}`;
         userNumberUpdate.value ="";
         startNewGame();
     }
    
     else{
         userGuessUpdate.innerHTML= "it's correct";
         userNumberUpdate.value ="";
         startNewGame();
     } 
}



    document.getElementById("attempts").innerHTML =userGuess.length;
};
const easyMode = ()=>{
    startGame();
     audio.play();
    maxGuess =10;
     


};
const hardMode = ()=>{
     audio.play();
    startGame();
    maxGuess =5;
};