/* 
* a) creare un event listener per i due bottoni (previous e next)
*
* b) dobbiamo inserire alla classe main-img l'immagine
*       - utilizziamo append()
* 
*
*
*/

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let imgContent = "";

// questo ciclo serve per prendere il numero di lunghezza della variabile items[]
for (let i = 0; i < items.length; i++) {

    // elemento da aggiunre come figli della classe main-img
    imgContent += `
            <div class="img-element">
                <img src="${items[i]}" alt="Random Image">
            </div>`

    console.log(items[i]);
}

// processo per prendere l'elemento da aggiungere che si trova all'interno del ciclo FOR e inserirlo come figlio della classe main-img
const mainImg = document.querySelector('.main-img');
mainImg.innerHTML += imgContent;

// img con classe action
const imgElements = document.querySelectorAll('.img-element');
imgElements[0].classList.add('active');
console.log(imgElements);

// thumbnails
const imgThumnails = document.querySelectorAll('.img-list > li');
imgThumnails[0].classList.add('active');
console.log(imgThumnails);

// bottoni
const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

let activeImg = 0;
let activeThum = 0;

btnPrevious.addEventListener('click', function() {

    imgElements[activeImg].classList.remove('active');

    activeImg--;

    imgElements[activeImg].classList.add('active');

    // thumbnails

    imgThumnails[activeThum].classList.remove('active');

    activeThum--;

    imgThumnails[activeThum].classList.add('active');
});

btnNext.addEventListener('click', function() {
    
    imgElements[activeImg].classList.remove('active');

    activeImg++;

    imgElements[activeImg].classList.add('active');

    // thumbnails

    imgThumnails[activeThum].classList.remove('active');

    activeThum++;

    imgThumnails[activeThum].classList.add('active');

});

