import employeeCard from "./employeeCardHTML.js"

const renderDOM = {
    renderEmployeeCards(cards) {
        let HtmlForAllCards = ""
        cards.forEach(card => {
            const entryHtml = employeeCard.makeEmployeeComponent(card)
            HtmlForAllCards += entryHtml
        })
        const employeeCardSection = document.querySelector(".employeeSection")
        employeeCardSection.innerHTML = HtmlForAllCards
    }
}

export default renderDOM