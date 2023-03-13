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