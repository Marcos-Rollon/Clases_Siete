const currentPlayerIcon = document.getElementById("current-player-display")
const tiles = _getTiles();
const startButton = document.getElementById("start-button")
const resetButton = document.getElementById("reset-button")

function _getTiles(){
    const htmlTiles = document.getElementsByClassName("tile")
    let row_1 = [];
    let row_2 = [];
    let row_3 = []
    for (let index =0 ; index < htmlTiles.length; index++){
        let tile = htmlTiles[index];
        if(index <= 2)  row_1.push(tile);
        else if(index <= 5) row_2.push(tile);
        else row_3.push(tile);
    }
    const list = [
        row_1,
        row_2,
        row_3
    ];
    return list;
}
