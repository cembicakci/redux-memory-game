import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeToggle } from '../../redux/cardsSlice'
import './style.css'

function Cards() {

    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards.items)
    console.log(cards)

    function handleClick(id) {
        dispatch(activeToggle(id))

    }


    return (
        <section className='memoryGame'>
            {
                cards.map(card => (
                    <div key={card.id} className={`memoryCard ${card.status ? 'active' : ''}`} onClick={() => handleClick(card.id)}>
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