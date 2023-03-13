function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
    setTimeout(() => {
        content2.style.opacity = 1;
      }, 10);
};
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};