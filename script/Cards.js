class Cards {
static cardsAmount=0

    constructor(){
        Cards.cardsAmount++
    }
    createDiv (){
        
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('back')
        const card = this.addEvent(div)
        return div
        
    }

    addEvent(div){
        div.addEventListener('click',()=>
        {
        console.log('Card was clicked')
        div.classList.toggle('back')
        return div
        })
    }
}

export default Cards