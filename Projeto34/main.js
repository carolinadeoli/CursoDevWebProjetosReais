let counterResult = document.getElementById('result');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');



let counter =0;
plus.addEventListener('click', function(){  
    counter++;
    counterResult.innerHTML =counter;
    
})

minus.addEventListener('click', function(){
    
    counter--;
    counterResult.innerHTML =counter;
})

reset.addEventListener('click', function(){   
    counter =0;
    counterResult.innerHTML = counter;
})



