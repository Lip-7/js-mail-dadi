/* initial variables */
const initialBtns = document.querySelectorAll('#initialBtn button');
const mailform = document.querySelector('#mailCheker form');
const mailsList = ["john.smith@gmail.com","jane.doe@hotmail.com","peter.parker@yahoo.com","mary.johnson@outlook.com","kevin.nguyen@gmail.com","samantha.lee@hotmail.com","jacob.wilson@yahoo.com","amanda.brown@outlook.com","michael.chen@gmail.com","jonSnow@winterfell.com"];
/* initial animations */
separe(initialBtns);
/* associate main buttons to events */
initialBtns[0].addEventListener('click',() => {
    switchVisibility('initial','mailCheker');
})
initialBtns[1].addEventListener('click',() => {
    switchVisibility('initial','diceGame');
})
/* Remove the refresh on input type submit */
preventSubmitRefresh(mailform);


document.getElementById('btnSubmitMail').addEventListener('click', () => {
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
});