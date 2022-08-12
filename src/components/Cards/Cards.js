import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

function Cards() {

   const cards = useSelector(state => state.cards.items)
   console.log(cards)

    return (    
        <section className='memoryGame'>
            {
                cards.map(card => (
                    <div key={card.id} className='memoryCard'>
                        <div className='back'>?</div>
                        <div className='front'>
                            <img src={card.img} />
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Cards