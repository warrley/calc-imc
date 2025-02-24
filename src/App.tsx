import { useState } from 'react';
import s from './App.module.css'
import { calculateImc, Level, levels } from './helpers/imc';
import { GridItem } from './components/GridItem/grid-item'

const App = () => {
  const [height, setHeigth] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>()

  const handleCalc = () => {
    if (height > 0 && weight > 0) {

    } else {
      alert("Fill all fields");
    }
  }

  return (
    <div className={s.main}>
      <header>
        <div className={s.headerContainer}>
          <h1>W</h1>
          <h3>bmi</h3>
          <span>powered by warley</span>
        </div>
      </header>

      <div className={s.container}>
        <div className={s.leftSide}>
          <h1>Calc your BMI</h1>
          <p>Body mass index (BMI) is a calculation that compares a person's weight to their height. It's used to estimate a person's body size and weight category</p>

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
          <div className={s.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;