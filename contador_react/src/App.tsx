import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const resetFunction = () => setCounter(0);

  const turnRed = counter < 0 ? "red" : "white";

  return (
    <>
      <h1>Meu contador em React</h1>
      <h3 style={{ color: turnRed }}>{counter}</h3>
      <div className="card">
        <button onClick={() => setCounter((count) => count -1) }>-1</button>
        <button onClick={resetFunction}>Reset</button>
        <button onClick={() => setCounter((count) => count + 1)}>+1</button>
      </div>
    </>
  )
}

export default App
