let number1 = Number(prompt("What is your first number?"));
let number2 = Number(prompt("What is our second number?"));
let operator = prompt("choose and operation +,-,*,/")


let result;
let result2;
let result3;

if(isNaN(number1)){
    result = "Invalid input please put a number";
}else{
    result="Continue";
}

if(isNaN(number2)){
    result2= "Invalid input";
}else{
    result2="Continue"
}
if(operator==="+"||operator==="/"||operator==="*"||operator==="-"){
    result3=number1+operator+number2
}else{
    result3="Cannot continue"
}
if(operator==="+"){
    result3=number1+number2
}else if(operator==="-"){
    result3=number1-number2
}else if(operator==="/"){
    result3=number1/number2
}else if(operator==="*"){
    result3=number1*number2
}else{
    result3="Please type in 2 numbers and an opertaion. Thank You"
}



document.body.innerHTML=result3;