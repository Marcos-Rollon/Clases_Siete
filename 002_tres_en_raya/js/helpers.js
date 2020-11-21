
function toggleCurrentPlayerIcon(){
    if(currentPlayerIcon.classList.contains("cross")){
        setCurrentPlayerIcon("circle")
    }else{
        setCurrentPlayerIcon("cross")
    }    
}
function setCurrentPlayerIcon(className){
    for (let cssClass in currentPlayerIcon.classList){
        currentPlayerIcon.classList.remove(cssClass)
    }
    currentPlayerIcon.classList.add(className)
}
function setCross(row, col){
    if(isNaN(row) || isNaN(col)) return;
    tiles[row][col].classList.remove("circle")
    tiles[row][col].classList.add("cross");
}
function setCircle(row, col){
    if(isNaN(row) || isNaN(col)) return;
    tiles[row][col].classList.remove("cross")
    tiles[row][col].classList.add("circle");
}
function setEmptyTile(row, col){
    if(isNaN(row) || isNaN(col)) return;
    tiles[row][col].classList.remove("circle")
    tiles[row][col].classList.remove("cross")
}
function hideHeader(){
    document.getElementById("header").style = "display:none" 
}
function showHeader(){
    document.getElementById("header").style = "display:flex" 
}

