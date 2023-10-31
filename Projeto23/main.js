let value1 = document.getElementById('value1');//puxavalor
let value2 = document.getElementById('value2');
let outputDiv = document.getElementById('output');

function showEvenNumbers(){
    let start = Number(value1.value);//armazenavalor
    let end = Number(value2.value);
    let i = start;
    let output = 0;

    while(i <= end){ //enquanto start menor que end verifica o if
        if(i %2 == 0){
            output = output +i +' '; //precisa concatenar com um espaço caso contrario ele soma os números // output = 0 + start
            outputDiv.innerHTML =output

        }
        i++ //adicionando até o fim
    }
}

