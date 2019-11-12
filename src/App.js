import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Article from './components/Article';
import Banner from './components/Banner';
import Services from './components/Services';
import Work from './components/Work';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Article />
      <Banner />
      <Services />
      <Work />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
