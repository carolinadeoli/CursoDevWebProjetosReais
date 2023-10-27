let colorList = [];

for(let i = 1; i <=3; i++){
    let userColor = prompt('Digite a cor ' +i+':');
    colorList.push(userColor);
}

document.getElementById('listacores').innerHTML = colorList;
// alert('Sua lista de cores ficou assim: '+colorList);

// 1º dá o primeiro giro
// 2ºpega o que foi digitado e coloca na array vazia;
// 3º gira para pegar as infos restantes
// 4º retorna no alert já com os valores