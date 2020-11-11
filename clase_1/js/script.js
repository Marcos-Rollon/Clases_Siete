const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");


function onLoad(){
    console.log("Page loaded")
    button1.addEventListener('click', startNewGame)
}

function startNewGame(){ 
    console.log("EMPEZANDO NUEVA PARTIDA TO GUAPA")
}