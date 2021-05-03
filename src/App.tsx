import React from 'react';
import "./styles/main.scss";
import logo from './logo.svg';
import './App.css';
import { Navbar } from './views/Navbar';
import { Popover } from './components/Popover';
import { Main } from './views/Main';
import { useDummyData } from './components/Main/Index';

function App() {
  useDummyData()
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Main />
    </div>
  );
}

export default App;
