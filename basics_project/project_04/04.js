let randomNumber= parseInt(Math.random() * 100 + 1);

 const submit = document.querySelector('#subt');
 const userInput = document.querySelector('#guessField');
 const guessslot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('.lowOrHi');
 const startOver = document.querySelector('.resultParas');
 
const p = document.createElement('p')


let prevGuess = []
let numGuess = 1 
let playGame = true ;

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault();
     const guess = parseInt(userInput.value);
     console.log(guess);
     validateGuess(guess);
    });
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('please enter a valid number')
     }
     else if(guess<1){
        alert('please enter a number more then 1')
     } else if (guess>100){
        alert('please enter a number less than 100')
     }else{
        prevGuess.push(guess)
        if(numGuess === 11){
              displayGuess(guess);
              displayMessage(`game over,random number was ${randomNumber}`)
              endGame()
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
     }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guesses it right`);
        endGame();
    } else if(guess < randomNumber){
          displayMessage('number is toooo low');
    } else if(guess > randomNumber){
        displayMessage('number is toooo high');
}
}
function displayGuess(guess){
     userInput.value = ' '
     guessslot.innerHTML += `${guess} ,  `;
     numGuess++;
     remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
      const newGamwButton = document.querySelector('#newGame');
      newGamwButton.addEventListener('click',function(e){
        randomNumber= parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - newGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;
      })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
