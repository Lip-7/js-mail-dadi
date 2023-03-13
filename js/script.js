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
/* verify the mail */
document.getElementById('btnSubmitMail').addEventListener('click', () => {mailCheck(mailsList)});
/* Roll the dice */
document.getElementById('btnRoll').addEventListener('click', () => {
    document.getElementById('userNumber').innerHTML = '';
    document.getElementById('pcNumber').innerHTML = '';
    document.getElementById('winnerNumber').innerHTML = '';
    for (let i = 0; i < 2; i++) {
        let pcwinner = true
        let draw = false
        let userNumber = 0
        let pcNumber = 0
        let result = ''
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
        setTimeout(() => {
            if (userNumber > pcNumber) {
                pcwinner = false
            }else if (userNumber == pcNumber){
                draw = true
            }
            /* let result = draw ? "It's a DRAW!!" : pcwinner ? "I Won!! Mhuahua" : "You won :(" */
            if (draw){
                result = "It's a DRAW!!";
            }else if (pcwinner){
                result = "I Won!! Mhuahua";
            }else{
                result = "You won :(";
            }
            console.log(result)
            console.log(draw)
            document.getElementById('winnerNumber').innerHTML = result
        }, 2500)
    }
});
