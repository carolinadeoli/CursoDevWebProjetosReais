let value1 = document.getElementById('value1');//puxavalor
let value2 = document.getElementById('value2');
let outputDiv = document.getElementById('output');

function showOddNumbers(){
    let start = Number(value1.value);//armazenavalor
    let end = Number(value2.value);
    let i = start;
    let output = 0;

    do{
        if(i %2 !== 0){
            output = output +i +' '; 
            outputDiv.innerHTML =output
        }
        i++
    } while(i<=end)
}

// while(i <= end){ 
    //     if(i %2 !== 0){
    //         output = output +i +' '; 
    //         outputDiv.innerHTML =output

    //     }
    //     i++ /
    // }
