import React from 'react'
import './style.css'
import { newGame } from '../../redux/cardsSlice'
import { useDispatch } from 'react-redux'

function Header() {

  const dispath = useDispatch();

  function handleGame(){
    dispath(newGame())
  }

  return (

    <header>
      <h1>Memory Game</h1>
      <button type='button' className='btn' onClick={handleGame}>New Game</button>
    </header>
  )
}

export default Header