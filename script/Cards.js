class Cards {
static cardsAmount=0 // count the number of instances was created

    constructor(){
        Cards.cardsAmount++ // add one to the counter 
    }
    createDiv (){ //method create a div with class name and return it
        
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('back')
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