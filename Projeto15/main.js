let fruits = ['Banana','Maçã','Kiwi','Morango','Abacate']
let numberList =document.getElementById('numberList'); // para inserir o item na id numberList

for(let i = 0; i <5; i++){
    let listItem = document.createElement('li'); //li é elemento dentro do HTML(cria a li)
    listItem.appendChild(document.createTextNode(fruits[i]))
    //listItem.textContent = 'Item' +i; //informa o que vai inserir no elemento(li)
    numberList.appendChild(listItem); //adiciona depois do último item o listItem 
}
























