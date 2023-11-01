const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg'
]


let currentIndex =0; //começar no index 0
let imageElement = document.getElementById('image');
let buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', function(){
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex =0;
    } //quando acabar as imagens volta pra img1
    imageElement.src = images[currentIndex];
})