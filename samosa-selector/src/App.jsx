import { useState } from 'react';
import samosa from './assets/samosa.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };

  return (
    <>
      <div className='header'>
        <h1>Samosa Selector</h1>

        <h2>Count: {count}</h2>

        <img id='samosa' src={samosa} className='samosa' alt='samosa' onClick={updateCount} />
      </div>

      {/* -----------CARDS---------- */}

      <div className='container'>
        <button className='card' onClick={buyDoubleStuffed}>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <p className='upgrade-total'>10 samosas</p>
        </button>
        <button className='card' onClick={buyPartyPack}>
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <p className='upgrade-total'>100 samosas</p>
        </button>
        <button className='card' onClick={buyFullFeast}>
          <h3>Full Feast 🧑‍🍳</h3>
          <p>10x per click</p>
          <p className='upgrade-total'>1000 samosas</p>
        </button>
      </div>
    </>
  );
}

export default App;
