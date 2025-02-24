import { useState } from 'react';
import s from './App.module.css'

const App = () => {
  const [height, setHeigth] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleCalc = () => {
    if (height > 0 && weight > 0) {
      var res = weight / (height * height);
      alert(res.toFixed(2));
    } else {
      alert("Fill all fields");
    }
  }

  return (
    <div className={s.main}>
      <header>
        <div className={s.headerContainer}>
          <h1>W</h1>
          <h3>imc</h3>
          <span>powered by warley</span>
        </div>
      </header>

      <div className={s.container}>
        <div className={s.leftSide}>
          <h1>Calc your IMC</h1>
          <p>IMC is an abbreviation for "integrated marketing communications". It's a marketing strategy that involves coordinating a company's communication efforts to create a consistent brand message across all media. </p>

          <input
            type='number'
            placeholder='Enter your height. Ex 1.5 in meters'
            value={height > 0 ? height : ''}
            onChange={e => setHeigth(parseFloat(e.target.value))}
          />

          <input
            type='number'
            placeholder={'Enter your weight. Ex 70 in kilograms'}
            value={weight > 0 ? weight : ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
          />

          <button onClick={handleCalc}>Calculate</button>
        </div>

        <div className={s.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default App;