import React from 'react'
import './style.css'
import { newGame, resetScore } from '../../redux/cardsSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

  const score = useSelector(state => state.cards.score);
  const dispath = useDispatch();

  function handleGame() {
    dispath(newGame())
    dispath(resetScore())
  }

  return (

    <header>
      <h1>Memory Game</h1>
      <div className='header-flex'>
        <div className='header-flex'>
          <h3>Your Score:</h3>
          <p className='header-score'>{score}</p>
        </div>
        <button type='button' className='btn' onClick={handleGame}>New Game</button>
      </div>
    </header>
  )
}

export default Header