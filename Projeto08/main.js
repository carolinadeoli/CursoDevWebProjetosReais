let grade = parseFloat(prompt('What is your grade?'));
if(grade>100){
    alert('Not valid. Grade must be below 100.')
}else if(grade >=90 && grade <=100){
    alert('You got: grade A!');
} else if( grade <=89 && grade >=80) {
    alert('You got: grade B!')
} else if(grade <= 79 && grade >=70 ){
    alert('You got: grade C!')
} else if (grade <=69 && grade >=60){
    alert('You got: grade D!')
} else{
    alert('You got: grade F!')
}

//professor fez sem operadores de comparação
//if(grade >100) -nota invalida
//else if (grade>=90)....