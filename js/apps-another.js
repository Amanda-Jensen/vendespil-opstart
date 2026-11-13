let cardsDom = document.querySelectorAll(".card");
let responsDom = document.querySelector("#respons");




cardsDom.forEach((li) => {
    li.addEventListener("click", (event) => {
        const target = event.currentTarget
        const cardId = target.getAttribute("data-card")

        getRespons(cardId) //argumenter

    })

})

function getRespons(responsText)/* parameter */ {
    responsDom.innerHTML = responsText
}