import React from 'react';
import './App.css';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header>Todo app</header>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
