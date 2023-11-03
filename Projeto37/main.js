let text = document.getElementById('text');
let result = document.getElementById('result');

function countingLetters(){
    let characters = text.value.length;
    result.innerHTML = ' The Text Contains ' + characters + ' letters.'
}