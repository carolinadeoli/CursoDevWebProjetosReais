const localStorageKey = 'to-do-list'

function validateNewTask(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = document.getElementById('new-task').value;
    let exists = values.find(x => x.name ==inputValue)
    return !exists ? false : true
}
function newTask(){
    let input = document.getElementById('new-task');
    
    if(!input.value){
        alert('Add a task to your list')
    } else if(validateNewTask()){
        alert('You alredy have a task with this name')
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify (values))
        showValues()
    }
    input.value = ''
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('items-list')

    list.innerHTML = ''

    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick = removeItem("${values[i]['name']}")></button></li>`
    }
}

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x=> x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify (values))
    showValues()
}
showValues()