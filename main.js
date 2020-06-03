let resetBtn = document.querySelector('.btn');
let but = document.querySelectorAll(".btn-click")

let btnOne = document.querySelector('#btn-1')
let btnTwo = document.querySelector('#btn-2')
let btnTree = document.querySelector('#btn-3')
let btnFour = document.querySelector('#btn-4')
let btnFive = document.querySelector('#btn-5')
let btnSix = document.querySelector('#btn-6')
let btnSeven = document.querySelector('#btn-7')
let btnEight = document.querySelector('#btn-8')
let btnNine = document.querySelector('#btn-9')
// the reset button
resetBtn.addEventListener('click', function () {
    window.location.reload()
})

let counter = 1;
let playerOnecount = 0;


but.forEach(n =>{
    n.addEventListener('click', function(){
        if(counter % 2 !== 0){
            n.innerHTML = 'X'
            counter++
            playerOnecount++
            PlayerOnecheck()
            
            
        }else if(counter % 2 === 0){
            n.innerHTML = 'O'
            counter++
            PlayerTwocheck()
        }
    })
})


function PlayerOnecheck(){
    if(btnOne.innerHTML==='X' && btnTwo.innerHTML === 'X' && btnTree.innerHTML === 'X' ){
        alert('player One wins')
        reload()
        return true
    }else if(btnFour.innerHTML==='X' && btnFive.innerHTML === 'X' && btnSix.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else if(btnSeven.innerHTML==='X' && btnEight.innerHTML === 'X' && btnNine.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else if(btnOne.innerHTML==='X' && btnFour.innerHTML === 'X' && btnSeven.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else if(btnTwo.innerHTML==='X' && btnFive.innerHTML === 'X' && btnEight.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else if(btnTree.innerHTML==='X' && btnSix.innerHTML === 'X' && btnNine.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else if(btnOne.innerHTML==='X' && btnFive.innerHTML === 'X' && btnNine.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else if(btnTree.innerHTML==='X' && btnFive.innerHTML === 'X' && btnSeven.innerHTML === 'X'){
        alert('player One wins')
        reload()
        return
    }else{
        checkForDraw()
    }
}


// playerTwo check

function PlayerTwocheck(){
    if(btnOne.innerHTML==='O' && btnTwo.innerHTML === 'O' && btnTree.innerHTML === 'O' ){
        alert('Player Two wins')
        reload()
        return true
    }else if(btnFour.innerHTML==='O' && btnFive.innerHTML === 'O' && btnSix.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else if(btnSeven.innerHTML==='O' && btnEight.innerHTML === 'O' && btnNine.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else if(btnOne.innerHTML==='O' && btnFour.innerHTML === 'O' && btnSeven.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else if(btnTwo.innerHTML==='O' && btnFive.innerHTML === 'O' && btnEight.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else if(btnTree.innerHTML==='O' && btnSix.innerHTML === 'O' && btnNine.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else if(btnOne.innerHTML==='O' && btnFive.innerHTML === 'O' && btnNine.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else if(btnTree.innerHTML==='O' && btnFive.innerHTML === 'O' && btnSeven.innerHTML === 'O'){
        alert('Player Two wins')
        reload()
        return
    }else{
        return
    }
}

// function to reload the game
function reload(){
    window.location.reload()
}



// function that checks for draw
function checkForDraw(){
    if(playerOnecount >= 5){
        alert(`The Game Ends in Draw
                THANK YOU FOR PLAYING
                CLICK OK TO START AGAIN
                `)
        reload();
    }else{
        return
    }
}

reset = () =>{
    but.forEach(n => n.innerHTML = '')
}
