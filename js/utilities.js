function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
    setTimeout(() => {
        content2.style.opacity = 1;
      }, 10);
};
function giveVisibility(value){
  const content = document.getElementById(value);
  content.classList.remove('d-none');
  setTimeout(() => {
    content.style.opacity = 1;
  }, 10);

}
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};
function preventSubmitRefresh(form){
  form.addEventListener('submit', (e) => {
      e.preventDefault();
} )
};
function mailCheck (mailsList){
  const userMail = document.getElementById('emailInput').value;
  let result = false
  for (let i = 0; i < mailsList.length; i++){
      if (mailsList[i] == userMail){
          result = true;
      }
  }
  if (result) {
      switchVisibility('mailForm', 'mailResult');
  }else{
      alert('Sorry but your mail is not in our database');
  }
};
function randomNumber(max) {
  return Math.round(Math.random() * (max - 1)) + 1;
};
function diceGame (){
  giveVisibility('dice-details')
  document.getElementById('userNumber').innerHTML = '';
  document.getElementById('pcNumber').innerHTML = '';
  document.getElementById('winnerNumber').innerHTML = '';
  let pcwinner = true
      let draw = false
      let userNumber = 0
      let pcNumber = 0
      let result = ''
  for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
          if (i == 0) {
              setTimeout(() => {
                  userNumber = randomNumber(6);
                  document.getElementById('userNumber').innerHTML = userNumber;
              }, j * 100);
          } else {
              setTimeout(() => {
                  setTimeout(() => {
                      pcNumber = randomNumber(6);
                      document.getElementById('pcNumber').innerHTML = pcNumber;
                  }, 1200);
              }, j * 100);
          }
      }
  }
  setTimeout(() => {
      if (userNumber > pcNumber) {
          pcwinner = false
      }else if (userNumber == pcNumber){
          draw = true
      }
      let result = draw ? "It's a DRAW!!" : pcwinner ? "I Won!! Mhuahua" : "You won :("
      console.log(result)
      console.log(draw)
      document.getElementById('winnerNumber').innerHTML = result
  }, 2500)
};