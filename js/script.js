const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

let currentIndex = 0;
const cardsPerPage = 3;
const itensPerPage = 3;

prevButton.addEventListener('click', () => {
    let cards = Array.from(carousel.querySelectorAll('.card'));
    let cardWidth = cards[0].offsetWidth +
    parseInt(getComputedStyle(cards[0]).marginRight) * 2;
    
    if(currentIndex > 0)  {
        currentIndex -= cardsPerPage;
        carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`
    }
});

nextButton.addEventListener('click', () => {
    let cards = Array.from(carousel.querySelectorAll('.card'));
    let cardWidth = cards[0].offsetWidth +
    parseInt(getComputedStyle(cards[0]).marginRight) * 2;
    
    if(currentIndex + cardsPerPage < cards.length)  {
        currentIndex += cardsPerPage;
        carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`
    }
});