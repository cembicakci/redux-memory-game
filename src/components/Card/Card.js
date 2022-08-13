import React from 'react'

function Card() {
    return (
        <div key={card.id} className={`memoryCard ${status}`} onClick={() => handleClick(card.key, card.status)}>
            <div className='back'>?</div>
            <div className='front'>
                <img src={card.img} />
            </div>
        </div>
    )
}

export default Card