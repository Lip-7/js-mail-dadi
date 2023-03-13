/* initial variables */
const initialBtns = document.querySelectorAll('#initialBtn button')
/* initial animations */
separe(initialBtns)
/* associate buttons to events */
initialBtns[0].addEventListener('click',() => {
    switchVisibility('initial','mailCheker')
})
initialBtns[1].addEventListener('click',() => {
    switchVisibility('initial','btnDice')
})

