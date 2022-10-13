const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

brathingAnimation();

function brathingAnimation() {
 container.className = 'container grow';
 text.innerHTML = 'Breath In!';

 setTimeout(() => {
  text.innerHTML = "Hold!";

  setTimeout(() =>{
   text.innerHTML = 'Breath Out!';
   container.className = 'container shrink';
  }, holdTime)
 }, breatheTime)
}

setInterval(brathingAnimation, totalTime);