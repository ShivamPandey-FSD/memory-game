const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

const random = cardArray.sort(() => 0.5 - Math.random());

const congrats = document.querySelector('#congrats');
const gridDisplay = document.querySelector('#grid');
let cardChosen = [];
let cardChosenIds = [];
const resultDisplay = document.querySelector('#result');
const cardsWon = [];
const message = document.querySelector('#message');

function createBoard() {
    for(let i=0 ; i<cardArray.length ; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        //alert('You have chosen the same card');
        message.textContent = "You have chosen the same card";
        setTimeout(() => {
            message.textContent = "";
        }, 1000);
    }

    if(cardChosen[0] == cardChosen[1]) {
        if(cardChosenIds[0] == cardChosenIds[1]) {
            cardsChosen = [];
            cardsChosenIds = [];
        } else {
            //alert('You found a match');
            message.textContent = "You found a match";
            setTimeout(() => {
                message.textContent = "";
            }, 1000);
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardChosen);
        }
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        //alert("Sorry! try again");
        message.textContent = "Sorry! try again";
        setTimeout(() => {
            message.textContent = "";
        }, 1000);
    }

    resultDisplay.textContent = cardsWon.length;

    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = "Congrats!! You won the game";
        congrats.innerHTML = "<img src='images/congrats.gif'/>";
        window.setTimeout(function() {
            location.reload()
        }, 10000);
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}