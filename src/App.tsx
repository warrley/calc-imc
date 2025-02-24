import { useState } from 'react';
import s from './App.module.css'
import { calculateImc, Level, levels } from './helpers/imc';
import { GridItem } from './components/GridItem/grid-item'
import Arrow from './assets/leftarrow.png'

const App = () => {
  const [height, setHeigth] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>()

  const handleCalc = () => {
    if (height > 0 && weight > 0) {
      setToShow(calculateImc(height, weight));
    } else {
      alert("Fill in all fields");
    }
  }

  const handleBack = () => {
    setToShow(null);
    setHeigth(0);
    setWeight(0);
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalc()
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
            disabled={toShow ? true : false}
            onKeyDown={(e) => handleEnter(e)}
          />

          <input
            type='number'
            placeholder={'Enter your weight. Ex 70 in kilograms'}
            value={weight > 0 ? weight : ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
            onKeyDown={(e) => handleEnter(e)}
          />

          <button onClick={handleCalc} disabled={toShow ? true : false}>Calculate</button>
        </div>

        <div className={s.rightSide}>
          {!toShow ? 
            <div className={s.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item} />
              ))}
            </div>
            :
            <div className={s.rightBig}>
                <div className={s.rightArrow} onClick={handleBack}>
                  <img src={Arrow} width={25} />
                </div>
                <GridItem data={toShow}/>
              </div>
          }
              
        </div>
      </div>
    </div>
  );
}

export default App;