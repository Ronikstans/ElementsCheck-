'use strict';


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper'); 

// box.style.backgroundColor = 'blue';
// box.style.width = '500px'; 

box.style.cssText = 'background-color: green; width: 500px'; 

btns[1].style.borderRadius = '100%'; 
circle[0].style.backgroundColor = 'red'; 

hearts.forEach (item =>{
    item.style.backgroundColor = 'green'; 
});

const div = document.createElement ('div'); 
// const text = document.createTextNode('SUKA'); 
div.classList.add('black');
// circle[0].remove(); // удаление элемента со страницы 

// document.querySelector('.wrapper').append(div); 
document.body.append(div); 

//перебрать все элементы и задать и м один стиль 
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'Blue'; 
// };


// hearts[0].replaceWith(circle[0]); // замена элемента на другой 









      //старые методы получения элементов со стораницы 
// const box = document.getElementById('box'); 
// console.log(box);  

// const btns = document.getElementsByTagName('button'); 
// console.log (btns[1]); 

// const circle = document.getElementsByClassName('circle'); 
// console.log(circle); 

// //применение новых методов получения в коде 
// const hearts = document.querySelectorAll('.heart'); 
//     hearts.forEach(item => {
//         console.log (item);
//     });


// const oneHeart = document.querySelector('.heart'); 
// console.log(oneHeart); 
// div.innerHTML = "Hello World";// текст в объект 
div.innerHTML = "<h1>Hello World</h1>"; 

div.insertAdjacentElement = ("after", <h2>Hello</h2>); 


