
let music = new Audio('music.mp3')
let turnMusic = new Audio('ting.mp3')
let gameover = new Audio('gameover.mp3')

let turn = 'X';
let gover = false;
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

//function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Won';
            gover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '150px';
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;


        }

    })
}

// Game logic
let boxs = document.getElementsByClassName('box');
Array.from(boxs).forEach(element => {
    let boxText = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gover) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;

            }
        }
    }
    )
})

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = 'X';
    gover = false;
    document.querySelector('.line').style.width = '0vw';
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0';
})