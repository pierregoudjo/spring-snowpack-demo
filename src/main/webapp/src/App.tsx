import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
};

console.log('ENV', import.meta.env);
console.log('PROCESS ENV', process.env);
export default App;
