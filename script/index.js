import CardsGenerator from './CardsGenerator.js'
import Cards from './Cards.js'
let counter = document.getElementById('counter')

const c=new CardsGenerator()

c.generate(10)
counter.textContent=Cards.cardsAmount
console.log(CardsGenerator.cardsList)

console.log('END')