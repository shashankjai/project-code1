const inputSlider = document.querySelector("[data-length-slider]");
const lengthDisplay = document.querySelector("[data-length-num]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyButton = document.querySelector("[data-copybtn]");
const copyMessage = document.querySelector("[data-copymsg]");
const indicator = document.querySelector("[data-indicator]");
const uppercaseCheckbox = document.querySelector("#upercase");
const lowercaseCheckbox = document.querySelector("#lowecase");
const numbersCheckbox = document.querySelector("#number");
const symbolsCheckbox = document.querySelector("#symbole");
const generateButton = document.querySelector(".generatebtn");
const allcheckbox=document.querySelector("input[type=checkbox]");
const symbols = "~!@#$%^&*()_+{}|:\"<>?-=[]\\;',./`";
let password="";
let passwordlength=10;
let checkcount=1;
handleSlider();

function handleSlider(){
inputSlider.value=passwordlength;
lengthDisplay.innerText=passwordlength;
}
function setinidicator(color){
indicator.style.backgroundColor=color;

}
function getRandomInt(min,max){
Math.floor(Math.random()*(max-min))+min;
}
function generaterandomNmuber(){
    return getRandomInt(0,9);
}
function generateLowerCase(){
    return String.fromCharCode(getRandomInt(97,123));
}
function generateUpperCase(){
    return String.fromCharCode(getRandomInt(65,91));
}
function generateSymbole(){
const random=getRandomInt(0,symbols.length);
return symbols.charAt(random);
}
fuction calcStrength(){
let hasupper=false;
let haslower=false;
let hasNum=false;
}