import Board from "./board.js";

// the grid property on the new Board() will be a 9x9 2-D array
const createBoard = (grid) => {
    // document.body.style.background = "#7ad8ea";

    const resetDiv = document.createElement("div");
    resetDiv.id = "reset-div";
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset Game"
    resetButton.className = "reset-button"
    resetButton.addEventListener("click", resetGame)

    const spyFamButton = document.createElement("button");
    spyFamButton.innerText = "Spy x Family";
    spyFamButton.className = "theme-button"
    // spyFamButton.addEventListener("click", changeThemeAnya);

    const demonButton = document.createElement("button");
    demonButton.innerText = "Inuyasha";
    demonButton.className = "theme-button"
    // demonButton.addEventListener("click", changeThemeInyu);

    const gridBox = document.createElement("div");
    gridBox.className = "grid-div"

    const inputDiv = document.createElement("div");
    inputDiv.id = "input-div"
    const inputSpan = document.createElement("span");
    const inputText = document.createElement("input");
    // inputText.style.background = "rgba(255, 255, 255, 0)"
    inputText.style.borderRadius = "5px"
    inputText.id = "input-text"
    inputText.placeholder = "Find the ships!"
    inputText.value = "";
    const inputButton = document.createElement("button");
    inputButton.className = "input-button"
    inputButton.innerText = "Submit"

    // const submitInput = document.getElementsByClassName("input-button")[0];
    inputButton.addEventListener("click", selectGridByInput)

    const cornerImg = document.createElement("img");
    cornerImg.className = "skull-img";
    cornerImg.src = "assets/images/skull.png"
    cornerImg.style.width = "100px"

    const letterDiv = document.createElement("div")
    letterDiv.className = "letter-div"
    for (let i = 0; i < grid.length; i++) {
        const letters = document.createElement("div")
        letters.className = "letter-box"
        letterDiv.append(letters)
    }

    const numberDiv = document.createElement("div")
    numberDiv.className = "number-div"
    for (let i = 0; i < grid.length; i++) {
        const numbers = document.createElement("div")
        numbers.className = "number-box"
        numberDiv.append(numbers)
    }

    const boardDiv = document.createElement("div");
    boardDiv.className = "entire-board"

    for (let r = 0; r < grid.length; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row-div";
        // rowDiv.classList.add(`letter${r}`)
        rowDiv.innerText = ""
        for (let c = 0; c < grid[0].length; c++) {
            const colDiv = document.createElement("div");
            colDiv.className = "col-div"
            // colDiv.classList.add(`number${c}`)
            colDiv.id = `${r}${c}`
            colDiv.setAttribute("data-val", grid[r][c])

            const val = document.createElement("span");

            colDiv.append(val);
            rowDiv.append(colDiv)

            colDiv.addEventListener("click", chooseSquare)
        }
        boardDiv.append(rowDiv);
    }
    document.body.append(resetDiv, gridBox, inputDiv)
    resetDiv.append(spyFamButton, demonButton, resetButton)
    gridBox.append(letterDiv, numberDiv, boardDiv, cornerImg)
    inputDiv.append(inputSpan, inputText, inputButton)

    const letterA = document.getElementsByClassName("letter-box")[0]
    letterA.innerText = "A"
    const letterB = document.getElementsByClassName("letter-box")[1]
    letterB.innerText = "B"
    const letterC = document.getElementsByClassName("letter-box")[2]
    letterC.innerText = "C"
    const letterD = document.getElementsByClassName("letter-box")[3]
    letterD.innerText = "D"
    const letterE = document.getElementsByClassName("letter-box")[4]
    letterE.innerText = "E"
    const letterF = document.getElementsByClassName("letter-box")[5]
    letterF.innerText = "F"
    const letterG = document.getElementsByClassName("letter-box")[6]
    letterG.innerText = "G"
    const letterH = document.getElementsByClassName("letter-box")[7]
    letterH.innerText = "H"
    const letterI = document.getElementsByClassName("letter-box")[8]
    letterI.innerText = "I"

    const number1 = document.getElementsByClassName("number-box")[0]
    number1.innerText = "1"
    const number2 = document.getElementsByClassName("number-box")[1]
    number2.innerText = "2"
    const number3 = document.getElementsByClassName("number-box")[2]
    number3.innerText = "3"
    const number4 = document.getElementsByClassName("number-box")[3]
    number4.innerText = "4"
    const number5 = document.getElementsByClassName("number-box")[4]
    number5.innerText = "5"
    const number6 = document.getElementsByClassName("number-box")[5]
    number6.innerText = "6"
    const number7 = document.getElementsByClassName("number-box")[6]
    number7.innerText = "7"
    const number8 = document.getElementsByClassName("number-box")[7]
    number8.innerText = "8"
    const number9 = document.getElementsByClassName("number-box")[8]
    number9.innerText = "9"

    for (let i = 0; i < 81; i++) {
        let alphabet = "ABCDEFGHI"
        const eachGrid = document.getElementsByClassName("col-div")[i];
        let currLetter = alphabet[i % 9]
        if (i >= 0 && i < 9) {
            eachGrid.innerText = `${currLetter}${1}`
        } else if (i >= 9 && i < 18) {
            eachGrid.innerText = `${currLetter}${2}`
        } else if (i >= 18 && i < 27) {
            eachGrid.innerText = `${currLetter}${3}`
        } else if (i >= 27 && i < 36) {
            eachGrid.innerText = `${currLetter}${4}`
        } else if (i >= 36 && i < 45) {
            eachGrid.innerText = `${currLetter}${5}`
        } else if (i >= 45 && i < 54) {
            eachGrid.innerText = `${currLetter}${6}`
        } else if (i >= 54 && i < 63) {
            eachGrid.innerText = `${currLetter}${7}`
        } else if (i >= 63 && i < 72) {
            eachGrid.innerText = `${currLetter}${8}`
        } else if (i >= 72 && i < 81) {
            eachGrid.innerText = `${currLetter}${9}`
        }
    }
}

const chooseSquare = async (square) => {
    const val = square.target.dataset.val;

    if (val === "null") {
        // square.target.style.backgroundColor =
        // can also add a class to the div and change the background color in css
        await square.target.classList.add("miss")
        square.target.innerText = "X"
        console.log(board.numRemaining)
        square.target.removeEventListener("click,", chooseSquare)
    } else {
        await square.target.classList.add('gotEm')
        await square.target.classList.add('anya-gotEm')
        square.target.innerText = val;
        // square.target.style.backgroundColor =
        // subtract one from numRemaining method on board class
        console.log(board.numRemaining)
        square.target.removeEventListener("click,", chooseSquare)
        board.numRemaining -= 1
    }
    // isDone method on the board class returns true if board.numsRemaining = 0;
    // if (board.isDone())
    if (board.numRemaining === -1) youWin()
}

const youWin = () => {
    const battleShipHeader = document.getElementsByTagName("h1")[0]
    const youWinDiv = document.createElement("div");
    youWinDiv.className = "game-over"
    youWinDiv.innerText = "YOU'RE A WINNER!"

    battleShipHeader.appendChild(youWinDiv)

    for (let i = 0; i < board.grid.length; i++) {
        for (let j = 0; j < board.grid[0].length; j++) {
            document.getElementById(`${i}${j}`).removeEventListener("click", chooseSquare)
        }
    }
}

const resetGame = () => {
    document.body.style.background = "#00bbff29"
    const h1 = document.getElementsByTagName("h1")[0]
    h1.classList.remove("anya-h1", "inyu-h1")
    h1.innerText = "BATTLESHIP"

    const gameBoard = document.getElementsByClassName("grid-div")[0];
    gameBoard.remove();

    const resetButton = document.getElementById("reset-div")
    resetButton.remove()

    const inputDiv = document.getElementById("input-div")
    inputDiv.remove();

    board = new Board();
    createBoard(board.grid)
}

const selectGridByInput = () => {
    const inputText = document.getElementById("input-text");
    const value = inputText.value.trim().toUpperCase();

    for (let i = 0; i < 81; i++) {
        const eachGrid = document.getElementsByClassName("col-div")[i]
        if (value === eachGrid.innerText) {
            if (eachGrid.dataset.val === "null") {
                eachGrid.classList.add("miss")
                eachGrid.innerText = "X"
            } else {
                eachGrid.classList.add("gotEm")
                eachGrid.innerText = eachGrid.dataset.val;
                board.numRemaining -= 1;
            }
            inputText.value = ""
        }
    }
    if (board.numRemaining === -1) youWin();
}

const changeThemeAnya = () => {
    const cornerImg = document.getElementsByClassName("skull-img")[0]
    cornerImg.src = "assets/images/anya1.png"
    cornerImg.className = "anya-img"
    // cornerImg.style.height = "140px"

    document.body.style.background = "#CDE4E5"

    const letterDiv = document.getElementsByClassName("letter-div")[0]
    letterDiv.style.alignItems = "flex-end"

    const numberBox = document.getElementsByClassName("number-box")
    const letterBox = document.getElementsByClassName("letter-box")
    for (let i = 0; i < 9; i++) {
        letterBox[i].style.color = "#22142b"
        numberBox[i].style.color = "#22142b"
    }

    const spyFamButton = document.getElementsByClassName("theme-button")[0]
    const inyuButton = document.getElementsByClassName("theme-button")[1]
    const resetButton = document.getElementsByClassName("reset-button")[0]
    const inputButton = document.getElementsByClassName("input-button")[0]
    spyFamButton.classList.add("anya-button")
    resetButton.classList.add("anya-button")
    inputButton.classList.add("anya-button")
    inyuButton.classList.add("anya-button")

    const h1 = document.getElementsByTagName("h1")[0]
    h1.classList.add("anya-h1")
    h1.innerText="BATTLExSHIP"

    const entireBoard = document.getElementsByClassName("entire-board")[0];
    entireBoard.classList.add("anya-board")

    const inputText = document.getElementById("input-text")
    inputText.classList.add("anya-input")
}

const changeThemeInyu = () => {
    const cornerImg = document.getElementsByClassName("skull-img")[0]
    cornerImg.src = "assets/images/inyu.png"
    cornerImg.className = "inyu-img"

    document.body.style.background = "#aba0bf9a"

    const letterDiv = document.getElementsByClassName("letter-div")[0]
    letterDiv.style.alignItems = "flex-end"

    const numberBox = document.getElementsByClassName("number-box")
    const letterBox = document.getElementsByClassName("letter-box")
    for (let i = 0; i < 9; i++) {
        letterBox[i].style.color = "#4C3A4B"
        numberBox[i].style.color = "#4C3A4B"
    }

    const themeButton = document.getElementsByClassName("theme-button")[0]
    const inyuButton = document.getElementsByClassName("theme-button")[1]
    const resetButton = document.getElementsByClassName("reset-button")[0]
    const inputButton = document.getElementsByClassName("input-button")[0]
    themeButton.classList.add("inyu-button")
    resetButton.classList.add("inyu-button")
    inputButton.classList.add("inyu-button")
    inyuButton.classList.add("inyu-button")

    const h1 = document.getElementsByTagName("h1")[0]
    h1.classList.add("inyu-h1")
    h1.innerText = "BATTLESHIP"

    const entireBoard = document.getElementsByClassName("entire-board")[0];
    entireBoard.classList.add("inyu-board")

    const inputText = document.getElementById("input-text")
    inputText.classList.add("inyu-input")
}


let board = new Board(); // creates a new game board

// examine the grid of the game board in the browser console
console.log(board.grid);

window.onload = () => {
    createBoard(board.grid)
    document.getElementsByClassName("theme-button")[1].addEventListener("click", changeThemeInyu);
    document.getElementsByClassName("theme-button")[0].addEventListener("click", changeThemeAnya);
}
