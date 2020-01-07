let counter = 0;
let grids = document.getElementsByClassName("grid1");
let typeofplayer = document.getElementById("typeofplayer");
let winner = false;
let isHuman = true;

let aiMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function addMove(i) {
    console.log("this is addMove value for i " + i);
    if (isHuman === true) {
        playAgainstHuman(i);
    }
    else {
        playAI(i);
    }
};

function playAgainstHuman(i) {
    if (grids[i].textContent !== "X" && grids[i].textContent !== "O" && winner === false) {
        if (counter % 2) {
            grids[i].textContent = "O";
        }
        else {
            grids[i].textContent = "X";
        }
        counter++;

        setTimeout(function () {
            if (checkForWin() != -1 && (checkForWin() === 'X' || checkForWin() === 'O')) {

                if (checkForWin() === "X") { alert("Player 1 wins!"); }
                else {
                    alert("Player 2 wins!");
                }
                winner = true;
            }
        }, 20)
    }

}

function playAI(i) {
    console.log("Div was pressed: " + i);

    if (grids[i].textContent !== "X" && grids[i].textContent !== "O" && winner === false) {

        grids[i].textContent = "X";

        removeAIMove(aiMoves, i);






        setTimeout(function () {
            if (checkForWin() != -1 && (checkForWin() === 'X' || checkForWin() === 'O')) {

                if (checkForWin() === "X") { alert("Player 1 wins!"); }
                else {
                    alert("Player 2 wins!");
                }
                winner = true;
            }
        }, 20)

        moveAI();
        counter++;
    }


};

function removeAIMove(array, item) {
    item = parseInt(item);
    console.log(item + " = THIS IS Item (ITEM in removeAI). The type is " + typeof item);


    // for(var i in array){
    //     console.log("if " + array[i] + " === " + item);
    //     if(array[i]===item){
    //         console.log("removed in removeAIMove " + array[i]);
    //         array.splice(i,1);
    //         break;
    //     }
    // }

    for (let i = 0; i < array.length; i++) {
        console.log("if " + array[i] + " === " + item);
        if (array[i] === item) {
            console.log("removed in removeAIMove " + array[i]);
            array.splice(i, 1);
            break;
        }
    }
}

function clearBoard() {
    for (let i = 0; i < grids.length; i++) {
        grids[i].textContent = "";
        counter = 0;
        winner = false;
    }
    aiMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

};

function playAgainstAI(human) {
    clearBoard();
    isHuman = human;

    if (isHuman === true){
        typeofplayer.textContent = ": Player";
    }
    else{
        typeofplayer.textContent = ": AI";
    }

}

function moveAI() {




    let randomMove = (Math.floor(Math.random() * aiMoves.length));
    console.log(aiMoves.length + " max length");
    let test = aiMoves[randomMove];

    console.log(randomMove + " is the random move. This translates to: " + test);
    grids[test].textContent = "O";
    removeAIMove(aiMoves, test); //ADD randomMove removeAIMove(aiMoves,randomMove);

    console.log("possible moves");
    console.log(aiMoves);



}



function checkForWin() {

    var field1 = grids[0].textContent;
    var field2 = grids[1].textContent;
    var field3 = grids[2].textContent;
    var field4 = grids[3].textContent;
    var field5 = grids[4].textContent;
    var field6 = grids[5].textContent;
    var field7 = grids[6].textContent;
    var field8 = grids[7].textContent;
    var field9 = grids[8].textContent;

    if ((field1 === field2) && (field2 === field3)) { return field3; }
    else if ((field4 === field5) && (field5 === field6)) { return field6; }
    else if ((field7 === field8) && (field8 === field9)) { return field9; }
    else if ((field1 === field4) && (field4 === field7)) { return field7; }
    else if ((field2 === field5) && (field5 === field8)) { return field8; }
    else if ((field3 === field6) && (field6 === field9)) { return field9; }
    else if ((field1 === field5) && (field5 === field9)) { return field9; }
    else if ((field3 === field5) && (field5 === field7)) { return field7; }



    return -1;
};