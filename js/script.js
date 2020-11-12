'use strict';
//старые методы получения элементов со стораницы 
const box = document.getElementById('box'); 
console.log(box);  

const btns = document.getElementsByTagName('button'); 
console.log (btns[1]); 

const circle = document.getElementsByClassName('circle'); 
console.log(circle); 

//применение новых методов получения в коде 
const hearts = document.querySelectorAll('.heart'); 
    hearts.forEach(item => {
        console.log (item);
    });


const oneHeart = document.querySelector('.heart'); 
console.log(oneHeart); 


