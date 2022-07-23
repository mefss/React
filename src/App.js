import logo from './logo.svg';
import Hello from './Hello';
import Goodbye from './Goodbye';
import './App.css';
import { useState } from 'react';
import styles from './App.module.css';


function App() {
  return (
    <div className="App">
      <Hello />
      <header className={ styles.AppHeader }>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye />
    </div>
  );
}

export default App;
