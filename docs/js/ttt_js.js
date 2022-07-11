var startbutton = document.getElementById("startbutton");
var p1NameBox = document.getElementById("p1name");
var p2NameBox = document.getElementById("p2name");
var warning = document.getElementById("warning");
var game = document.querySelector("#game");
var cells = document.querySelectorAll(".cell");
var turnName = document.getElementById("turnName");
var commentBox = document.getElementById("comments");
var cellValue = 0;
var cellLocation = "";
var winMessage = "";
var turn = 0;
var q = 0;
var w = 0;
var e = 0;

const winningCombinations = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9],
    [1, 4, 7],[2, 5, 8],[3, 6, 9],
    [1, 5, 9],[3, 5, 7]
  ];

// player 1 object
var player1 = {
    symbol: "X",
    name: p1NameBox.value,
    clicked: []
};

// player 2 object
var player2 = {
    symbol: "O",
    name: p2NameBox.value,
    clicked: []
};

// constructor function for comments
function comment(pName, pSymbol) {
    this.pName = pName;
    this.pSymbol = pSymbol
    this.dateTime = function() {
        return new Date().toLocaleTimeString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
}

// ensure player names are entered
function checkUsers() {
    // update player names from input boxes
    player1.name = p1NameBox.value;
    player2.name = p2NameBox.value;
    // if any player name length = 0 show warning, else start game
    if (player1.name.length == 0 || player2.name.length == 0) {
        // warning message
        warning.classList.remove("toggle") // ensure warning is shown if game previsouly run
        game.classList.add("toggle") // ensure game area hidden if game previously run
    } else {
        // start game
        warning.classList.add("toggle"); // hide warning
        game.classList.remove("toggle"); // show game area
        startGame();
    }
}

// if player names are entered and start button is pressed
function startGame() {
    // reset variables
    player1.clicked = player2.clicked = []; // reset player selected lists
    turn = 0; // reset turns
    turnName.textContent = player1.name; // player 1 always starts
    commentBox.textContent = ""; // clear commentary
    winMessage = ""; // clear win/tie message

    // loop through all cells
    for (var i = 0; i < cells.length; i++) {
        // set pointers
        cells[i].textContent = i + 1;
        // clean board 
        cells[i].classList.remove("cellClicked");
        cells[i].classList.remove("cellWinner");
        // create button
        cells[i].onclick = cellSelected;
    }
}

function stopGame() {
    // add class to highlight winning row
    cells[q-1].classList.add("cellWinner");
    cells[w-1].classList.add("cellWinner");
    cells[e-1].classList.add("cellWinner");
    // loop through and disable all buttons
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = null;
    }
}

// switch case to obtain cell location
function getCellLocation() {
    switch (cellValue) {
        case "1":
            cellLocation = "1,1";
            break;

        case "2":
            cellLocation = "1,2";
            break;

        case "3":
            cellLocation = "1,3";
            break;

        case "4":
            cellLocation = "2,1";
            break;

        case "5":
            cellLocation = "2,2";
            break;

        case "6":
            cellLocation = "2,3";
            break;

        case "7":
            cellLocation = "3,1";
            break;

        case "8":
            cellLocation = "3,2";
            break;

        case "9":
            cellLocation = "3,3";
            break;

        default:
            cellLocation = "(cell not found)";
            break;
    }
}

// function to check board once a cell is selected
function checkBoard() {
    // if turn >= 9 it is a tie. This message will be overwritten if there is a winner on turn 9
    if (turn >= 9) {
        winMessage = "Game Over: Tie!";
    }

    // check player selection with winning combinations
    for (var o = 0; o < winningCombinations.length; o++) {
        q = winningCombinations[o][0];
        w = winningCombinations[o][1];
        e = winningCombinations[o][2];
        // if player clicked list includes all three winning combination values, player win
        if (player1.clicked.includes(q) && player1.clicked.includes(w) && player1.clicked.includes(e)) {
            winMessage = "Game Over:</br>" + player1.name + " Wins!";
            stopGame();
        } else if (player2.clicked.includes(q) && player2.clicked.includes(w) && player2.clicked.includes(e)) {
            winMessage ="Game Over:</br>" + player2.name + " Wins!";
            stopGame();
        }
    }

    // print game end message, nothing will be printed if there are more turns
    commentBox.innerHTML += "<b>" + winMessage + "<b>"
}

// function called if cell is clicked
function cellSelected() {
    // save selected cell and get location
    cellValue = this.textContent;
    getCellLocation()

    // disable button if pressed
    this.onclick = null;

    // if true p1 turn, else p2 turn
    if (turn % 2 == 0) {
        // update turn name
        turnName.textContent = player2.name;
        // record player choice
        player1.clicked += this.textContent;
        // write symbol to cell
        this.textContent = player1.symbol;
        // object constructor to generate commentary output message
        var newComment = new comment(player1.name, player1.symbol)
        // print constructed comment
        commentBox.textContent += "at " + newComment.dateTime() + " \r\n " + newComment.pName + " played " + newComment.pSymbol + " at " + cellLocation;
        commentBox.innerHTML += "\n\n";

    } else {
        turnName.textContent = player1.name;
        player2.clicked += this.textContent;
        this.textContent = player2.symbol;
        var newComment = new comment(player2.name, player2.symbol)
        commentBox.textContent += "at " + newComment.dateTime() + " \r\n " + newComment.pName + " played " + newComment.pSymbol + " at " + cellLocation;
        commentBox.innerHTML += "\n\n";
    }
    turn ++;

    // update clicked cell
    this.classList.add("cellClicked");

    checkBoard();

    // keep scroll bar at bottom
    commentBox.scrollTop = commentBox.scrollHeight;
}

// check users function once start button is clicked
startbutton.onclick = checkUsers;