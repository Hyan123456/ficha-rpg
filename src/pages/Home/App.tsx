import React from 'react';
import logo from '../../assets/logo.svg';
import style from './App.module.scss';

function Home() {
  return (
    <div className="App">
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <p>
          Você esta na pagina inicial
        </p>
      </header>
    </div>
  );
}

export default Home;
