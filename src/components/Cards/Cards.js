import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeToggle } from '../../redux/cardsSlice'
import './style.css'

function Cards() {

    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards.items)
    console.log(cards)

    const [selectedCards, setSelectedCards] = useState([]);

    let choiceOne, choiceTwo;

    useEffect(() => {
        console.log(selectedCards)

        if (selectedCards[0] && selectedCards[1]) {

            choiceOne = selectedCards[0].key;
            choiceTwo = selectedCards[1].key;


            if (choiceOne == choiceTwo) {
                console.log('selected')
                setSelectedCards([]);

            } else {
                setTimeout(() => {
                    dispatch(activeToggle(selectedCards[0].id))
                    dispatch(activeToggle(selectedCards[1].id))

                    setSelectedCards([])
                }, 500)

            }

        }
    }, [selectedCards])



    function handleClick(card) {

        dispatch(activeToggle(card.id))
        setSelectedCards([...selectedCards, card])
    }


    return (
        <section className='memoryGame'>
            {
                cards.map(card => (
                    <div key={card.id} className={`memoryCard ${card.status ? 'active' : ''} ${selectedCards.length === 2 ? 'disabled' : ''}`} onClick={() => handleClick(card)}>
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