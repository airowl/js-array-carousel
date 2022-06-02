
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

// Prendo i bottoni
const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

//let activeImg = 0;
//let activeThum = 0;
let active = 0;

// Bottone per tornare indietro di un immagine
btnPrevious.addEventListener('click', function() {

    // Immagine attiva e thumbnails elemento attivo
    imgElements[active].classList.remove('active');
    imgThumnails[active].classList.remove('active');


    if (!active == 0 ) {
        active--;
    } else {
        active = imgElements.length - 1;
    }

    imgElements[active].classList.add('active');
    imgThumnails[active].classList.add('active');

});

// Bottone per andare avanti di un immagine
btnNext.addEventListener('click', function() {
    
    // Immagine attiva e thumbnails elemento attivo
    imgElements[active].classList.remove('active');
    imgThumnails[active].classList.remove('active');


    if (active < imgElements.length - 1) {
        active++;
    } else {
        active = 0;
    }

    imgElements[active].classList.add('active');
    imgThumnails[active].classList.add('active');

});

