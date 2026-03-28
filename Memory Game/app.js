const cardArray = [
    {
        name: "type",
        img : './public/1.png'
    },
    {
        name: "design",
        img : './public/2.png'
    },
    {
        name: "ui",
        img : './public/3.png'
    },
    {
        name: "diag",
        img : './public/4.png'
    },
    {
        name: "drobe",
        img : './public/5.png'
    },
    {
        name: "goo",
        img : './public/6.png'
    },
    {
        name: "type",
        img : './public/1.png'
    },
    {
        name: "design",
        img : './public/2.png'
    },
    {
        name: "ui",
        img : './public/3.png'
    },
    {
        name: "diag",
        img : './public/4.png'
    },
    {
        name: "drobe",
        img : './public/5.png'
    },
    {
        name: "goo",
        img : './public/6.png'
    },
];

cardArray.sort(() => 0.5 - Math.random());
var score = 0;
var result = document.getElementById("result");
const grid = document.querySelector("#grid");
var chosenCards = [];
var chosenCardsId = [];
const matchModal = document.getElementById('match-modal');
const duplicateModal = document.getElementById('duplicate-modal');
const winModal = document.getElementById('win-modal');
const reset = document.getElementById('reset');
const resetModal = document.getElementById('new-game');

var cardsWon = [];
console.log(grid);
// result.innerText = "this guy";


function generateCards() {
    cardArray.sort(() => 0.5 - Math.random());
    for (i=0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute("src", './public/card-bg.png');
        card.setAttribute("id", i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
        // console.log(card, i);

    }
}

generateCards();

function checkMatch() {
    let cards = document.querySelectorAll("#grid img");
    let card1 = chosenCardsId[0];
    let card2 = chosenCardsId[1];
    // console.log(cards);

    if (card1 == card2) {
        //this checks if the same card was clicked twice
        diag(duplicateModal);
        chosenCards.pop();
        chosenCardsId.pop();
    }


    if (chosenCards[0] == chosenCards[1]) {
        cards[card1].setAttribute('src', './public/white-bg.png');
        cards[card2].setAttribute('src', './public/white-bg.png');
        cards[card1].removeEventListener('click', flipCard);
        cards[card2].removeEventListener('click', flipCard);
        diag(matchModal);
        cardsWon.push(chosenCards);
        chosenCards.pop();
        chosenCards.pop();
        chosenCardsId.pop();
        chosenCardsId.pop();
        score += 10;
        result.innerText = score;

        if (cardsWon.length == 6) {
            diag(winModal);
            grid.innerHTML = "";
            cardsWon = [];
            result.innerText = "";
            score = 0;
            generateCards();
            diag(resetModal);
        }
        // console.log(cardsWon);


    } else {
        cards[card1].setAttribute('src', './public/card-bg.png');
        cards[card2].setAttribute('src', './public/card-bg.png');

        chosenCards.pop();
        chosenCards.pop();
        chosenCardsId.pop();
        chosenCardsId.pop();
        console.log(chosenCards,chosenCardsId);
    }
}

function flipCard() {
    let cardId = this.getAttribute('id');
    chosenCards.push(cardArray[cardId].name);
    chosenCardsId.push(cardId);
    console.log(chosenCards, chosenCardsId);
    this.setAttribute('src', cardArray[cardId].img);

    if (chosenCards.length == 2) {
        setTimeout(checkMatch , 500);
    }
}

function diag(item) {
    item.style.display = "flex";
    setTimeout(() => item.style.display = "none", 500);
}

reset.onclick = () => {
    grid.innerHTML = "";
    cardsWon = [];
    result.innerText = "";
    score = 0;
    chosenCards = [];
    chosenCardsId = [];
    generateCards();
    diag(resetModal);
}