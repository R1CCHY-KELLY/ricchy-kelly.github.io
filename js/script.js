let introText = document.getElementById("intro-text");
let changeButton = document.getElementById("change-text-btn");

let changed = false;

changeButton.onclick = function () {
    // body...
    if(changed === false){
    introText.textContent = "Welcome to my digital portfolio!";
    changed = true;
    
    }else{
    introText.textContent = "Computer Science Student & Aspiring Investor";

    changed = false;
    }
};