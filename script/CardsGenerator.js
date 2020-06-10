import Cards from './Cards.js'

class CardsGenerator{
 
    static cardsList=[]
    
    generate(cards){
        for (let i=0 ; i<cards ; i++){
        let card = this.createCard()
        CardsGenerator.cardsList.push(card)
        this.drawCards(card.createDiv())
        console.log(CardsGenerator.cardsList)
        
    }
}

createCard(){ //create cards 
    
    const card = new Cards()
    return card
}
 
   drawCards(card){ 
        const wrapper = document.getElementById('wrapper')

            wrapper.appendChild(card)
        
        }


    
}
export default CardsGenerator


