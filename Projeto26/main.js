let numberInput = document.getElementById('numberInput');
let checkButton = document.getElementById('checkButton');
let outputDiv = document.getElementById('output');

checkButton.addEventListener('click', function(){
    let number = Number(numberInput.value);

    if (number >= 1 && number <= 10){
        outputDiv.innerHTML = 'valid number!';
    } else if (number <1){
        outputDiv.innerHTML = 'Invalid number! Too small';
    } else if (number > 10){
        outputDiv.innerHTML = 'Invalid number! Too large';
    } else{
        outputDiv.innerHTML = 'Something went wrong!';
    }
    numberInput.value =''
})