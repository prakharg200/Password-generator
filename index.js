const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let isToggleOn = true;
let toggleButton = document.getElementById("toggle")

function toggle(){
    if(isToggleOn){
        toggleButton.textContent = "OFF";
        toggleButton.classList.add("toggleClass");
        isToggleOn = false;
    }else{
        toggleButton.textContent = "ON";
        toggleButton.classList.remove("toggleClass");
        isToggleOn = true;
    }
}

function generatePasswords(){
    let pass1="",pass2="";
    let passwordLength = document.getElementById("inputLength").value;
    let charLength = characters.length

    if(!isToggleOn){
        charLength = 52;
    }

    for(let i=0;i<passwordLength;i++){
        let idx1 = Math.floor(Math.random()*charLength);
        let idx2 = Math.floor(Math.random()*charLength);
        pass1 += characters[idx1];
        pass2 += characters[idx2];
    }

    document.getElementById("pass1").textContent = pass1;
    document.getElementById("pass2").textContent = pass2;
}

function copy(that){
    let value = that.textContent;
    navigator.clipboard.writeText(value);

    //snackbar for copied message
    var sb = document.getElementById("snackbar");
    sb.className = "show";
    setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}