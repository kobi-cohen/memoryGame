import CardsGenerator from './CardsGenerator.js'
import Cards from './Cards.js'
let counter = document.getElementById('counter')

const c=new CardsGenerator()

c.generate(4)
counter.textContent=Cards.cardsAmount
console.log('END')