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



0 - 9 = 1
9 - 18 = 2

0 1 2 3 4 5 6 7 8 9
9 10 11 12 13 14 15 16 17 18


9 * 1 / 9 = 1
9 * 2 / 9 = 2
