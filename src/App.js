import React from 'react';
import './App.css';
import Input from './components/input/input';
import Cards from './components/cards/cards';

function App() {
  return (
    <div className="App">
      <header>Todo app</header>
      <Input />
      <Cards />
    </div>
  );
}

export default App;
