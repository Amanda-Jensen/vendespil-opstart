const cardsWrapperDrom = document.querySelector("#cards-wrapper");

let cardArray = []
let numberOfClick = 0
let card1 = null
let card2 = null
let card1Data = null;
let card2Data = null;




function handleClick(event) {

    let currentCard = event.currentTarget
    numberOfClick++

    if (numberOfClick == 1) {
        if (card1 && !card1.classList.contains("done")) {
            card1.classList.remove("show")
        }
        if (card2 && !card2.classList.contains("done")) {
            card2.classList.remove("show")
        }

        card1 = currentCard
        card1.classList.add("show")
    }
    if (numberOfClick == 2) {
        card2 = currentCard;
        currentCard.classList.add("show");

        if (card1 != card2) {
            card1Data = card1.getAttribute("data-card");
            card2Data = card2.getAttribute("data-card");
            if (card1Data == card2Data) {
                card1.classList.add("done")
                card2.classList.add("done")
                card1.removeEventListener("click", handleClick)
                card2.removeEventListener("click", handleClick)
            }
        }
        numberOfClick = 0
    }


}

function createCards(numberOfCards) {
    for (let index = 0; index < numberOfCards; index++) {
        // console.log(index);

        // cardArray.push(`<li class="card" data-card=${index}><span class="front">Card number ${index}</span></li>`)
        // cardArray.push(`<li class="card" data-card=${index}><span class="front">Card number ${index}</span></li>`)
        cardArray.push(`<li class="card" data-card=${index}><span class="front">Card</span><span class="back"> ${index}</span></li>`)
        cardArray.push(`<li class="card" data-card=${index}><span class="front">Card</span><span class="back"> ${index}</span></li>`)

    }


    let shuffleArray = _.shuffle(cardArray)
    insetHtml(shuffleArray);
}


function insetHtml(cardArray) {
    cardArray.forEach((card) => {
        console.log(card);
        cardsWrapperDrom.insertAdjacentHTML("beforeend", card)
        let cards = document.querySelectorAll(".card")
        addClickEvent(cards)
    })
}

function addClickEvent(cards) {
    cards.forEach((card) => {

        card.addEventListener("click", handleClick)
    })

}


document.querySelector("#reset").addEventListener("click", resetGame)
function resetGame() {
    location.reload();
}



createCards(6);