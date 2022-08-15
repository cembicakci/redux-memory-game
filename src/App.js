import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Confetti from 'react-confetti'

import { useSelector } from 'react-redux';

function App() {

  const selectedAll = useSelector(state => state.cards.selectedAll)

  return (
    <div className="App">
      <Confetti
        width='1000px'
        height='1000px'
      />
      <Header />
      <Cards />
    </div >
  );
}

export default App;
