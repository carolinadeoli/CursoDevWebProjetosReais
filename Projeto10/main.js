let conta = 0;
let tip = 0;
let total =0;

conta = parseFloat(prompt('Qual é o valor da conta?'));
tip = parseFloat(prompt('Quanto de gorjeta(decimal)%?'));

tip = (conta * tip)/100;
total = conta +tip;

alert('O valor total da conta é: R$ ' + total);

