import Cards from './Cards.js'

class CardsGenerator{
    static cardsList=[]
    
    generate(cards){
        for (let i=0 ; i<cards ; i++){
        this.createCard()
        
    }
}

createCard(){ //create cards 
    
    const card = new Cards()
    
    this.drawCards(card.createDiv())
}
 
   drawCards(card){ 
        const wrapper = document.getElementById('wrapper')

            wrapper.appendChild(card)
        
        }


    
}
export default CardsGenerator


