import { useState, useEffect } from 'react'
import './App.scss'

const App = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value: string) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
  };
  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };
  const clearDisplay = () => {
    setDisplayValue('');
  };

  useEffect(() => {
    const heandleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
    if (key.match(/[0-9+\-*/.=]|Backspace/)) {
      event.preventDefault();
      if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        setDisplayValue((prevDisplayValue) =>
          prevDisplayValue.slice(0, -1)
          );
      } else {
        handleButtonClick(key);
      }
    }
  };

  window.addEventListener('keydown', heandleKeyDown);
  return () => {
    window.removeEventListener('keydown', heandleKeyDown);
  };
}, [handleButtonClick, calculateResult]);

  return (
    <>
    <h1>Calculadora</h1>
      <div className="calculator">
        <input type="text" className='display' value={displayValue} readOnly />

        <div className="button" onClick={() => handleButtonClick('1')}>
          1
        </div>

        <div className="button" onClick={() => handleButtonClick('2')}>
          2
        </div>

        <div className="button" onClick={() => handleButtonClick('3')}>
          3
        </div>

        <div className="button" onClick={() => handleButtonClick('+')}>
          +
        </div>

        <div className="button" onClick={() => handleButtonClick('4')}>
          4
        </div>

        <div className="button" onClick={() => handleButtonClick('5')}>
          5
        </div>

        <div className="button" onClick={() => handleButtonClick('6')}>
          6
        </div>

        <div className="button" onClick={() => handleButtonClick('-')}>
          -
        </div>

        <div className="button" onClick={() => handleButtonClick('7')}>
          7
        </div>

        <div className="button" onClick={() => handleButtonClick('8')}>
          8
        </div>

        <div className="button" onClick={() => handleButtonClick('9')}>
          9
        </div>

        <div className="button" onClick={() => handleButtonClick('*')}>
          *
        </div>

        <div className="button" onClick={() => handleButtonClick('0')}>
          0
        </div>

        <div className="button" onClick={() => handleButtonClick('.')}>
          .
        </div>

        <div className="button" onClick={() => handleButtonClick('/')}>
          /
        </div>

        <div className="button" onClick={calculateResult}>
          =
        </div>

        <div className="button-c" onClick={clearDisplay}>
          C
        </div>
      </div>
    </>
  )
}

export default App
