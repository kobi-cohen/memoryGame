class Cards {
static cardsAmount=0 // count the number of instances was created

    constructor(){
        Cards.cardsAmount=Cards.cardsAmount+2 // add one to the counter 
        this.id = Cards.cardsAmount
    }
    createDiv (){ //method create a div with class name and return it
        
        const div = document.createElement('div')
        div.classList.add('face')
        div.classList.add('back')
        div.dataset.id=this.id    

        const card = this.addEvent(div)
        return div
        
    }

    addEvent(div){ // add event listener to div 
        div.addEventListener('click',()=>
        {
        console.log('Card was clicked')
        div.classList.toggle('back')
        return div
        })
    }
}

export default Cards