function trocarCor(){
    let cores = ['red','green','yellow','orange','pink']
    let randomCor = cores[Math.floor(Math.random()* cores.length)];
    document.body.style.backgroundColor = randomCor

}