let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };
    updateScoreElement();


// if(score === null){
//   score = {
//     wins: 0,
//     losses:0,
//     ties:0

//   }



//JSON.parse convert the json string back to an object


let isAutoPlaying = false;
let intervalId;



function autoPlay(){
  if(!isAutoPlaying){
   intervalId=setInterval(function(){
    const playerMove = pickComputerMove();
playGame(playerMove);
  },1000);
  isAutoPlaying = true;
}
else{
  clearInterval(intervalId);
  isAutoPlaying = false;
}

}
// --- Keyboard Shortcuts for Rock Paper Scissors ---
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});


    function playGame(playerMove) {
      const computermove = pickComputerMove();
      let result = '';

      if (playerMove === 'scissors') {
        if (computermove === 'rock') {
          result = 'You Lose';
        } else if (computermove === 'paper') {
          result = 'You Win';
        } else {
          result = 'Tie';
        }
      } 
      else if (playerMove === 'paper') {
        if (computermove === 'rock') {
          result = 'You Win';
        } else if (computermove === 'paper') {
          result = 'Tie';
        } else {
          result = 'You Lose';
        }
      } 
      else if (playerMove === 'rock') {
        if (computermove === 'rock') {
          result = 'Tie';
        } else if (computermove === 'paper') {
          result = 'You Lose';
        } else {
          result = 'You Win';
        }
      }
if(result=== 'You Win'){
    score.wins = score.wins + 1;
}
else if(result=== 'You Lose'){
    score.losses+=1;
}
else if(result === 'Tie'){
    score.ties +=1;
}



localStorage.setItem('score',JSON.stringify(score));
//JSON.stringify(score) will convert js object score in json object

updateScoreElement();
// document.querySelector('.js-score')
//   .innerHTML= `Wins:${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = ` You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computermove}-emoji.png" class="move-icon">
 Computer`;





//  alert(`You picked ${playerMove}. Computer picked ${computermove}. ${result}

//       Wins:${score.wins},Losses: ${score.losses},Ties: ${score.ties}`);

    }

    let computermove = '';

    function updateScoreElement(){
      document.querySelector('.js-score')
.innerHTML= `Wins:${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomnumber = Math.random();
      if (randomnumber < 1/3) {
        computermove = 'rock';
      } else if (randomnumber < 2/3) {
        computermove = 'paper';
      } else {
        computermove = 'scissors';
      }
      return computermove;
    }