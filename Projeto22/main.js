let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let operator = document.getElementById('operator');
let calculeteButton = document.getElementById('calculate');
let resultDiv = document.getElementById('result');

calculeteButton.addEventListener('click',function(){
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let op = operator.value;

    switch(op){ 
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case'*':
        result = num1 * num2;
        break;
    case '/':
        result = num1/num2;
        break;
    default:
        result ='invalid'
}
  resultDiv.innerHTML ='The result is ' + result;  
});