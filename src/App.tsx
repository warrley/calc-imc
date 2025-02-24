import s from './App.module.css'

const App = () => {
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
          ...
        </div>

        <div className={s.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default App;