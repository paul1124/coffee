import React from 'react';
import Home from './components/Home';
import Article from './components/Article';
import Banner from './components/Banner';
import Services from './components/Services';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Article />
      <Banner />
      <Services />
      <Work />
    </div>
  );
}

export default App;
