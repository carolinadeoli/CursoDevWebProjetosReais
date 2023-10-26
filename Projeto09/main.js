let idade = parseInt(prompt('Qual é a sua idade?'));
let titulo = prompt('Você tem título de eleitor?(sim/não)');

if(idade >=16 && titulo === 'sim'){
    alert('Você pode votar!')
} else if(idade >=16 && titulo ==='não'){
    alert('Você precisa de título')
} else{
    alert('Você não pode votar')
}

// solução do professor
// let idade = prompt('Qual é a sua idade?');
// let temTitulo = prompt('Você tem título de eleitor?(sim/não)');

//if(idade >=idadeMinima &&temTitulo =='sim')
//else if(idade <=idadeMinima &&temTitulo =='não')
// else if(idade <idadeMinima && temTitulo =='sim' || temTitulo =='não')
