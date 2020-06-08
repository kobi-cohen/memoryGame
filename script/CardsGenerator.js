import Cards from './Cards.js'

class CardsGenerator{
    static cardsList=[]
    
    generate(cards){
        for (let i=0 ; i<cards ; i++){
        this.createCard()
        
    }
}

createCard(){
    
    const card = new Cards()
    let a = card.createDiv()
    // Cards.cardsList.push(a)
    this.drawCards(a)
}
 
   drawCards(card){
        const wrapper = document.getElementById('wrapper')
        // cardsList.map(card=>{

            wrapper.appendChild(card)
        // })
        }


    
}
export default CardsGenerator


