import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './style.css'

function Cards() {

    const cards = useSelector(state => state.cards.items)

    // console.log(cards)

    function handleClick(key, id) {
        console.log(key)

        let stat = 'active';
        const cardsCopy = [...cards, cards.stat];

        console.log(cardsCopy)



    }


    return (
        <section className='memoryGame'>
            {
                cards.map(card => (
                    <div key={card.id} className={`memoryCard ${card.status}`} onClick={() => handleClick(card.key, card.id)}>
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