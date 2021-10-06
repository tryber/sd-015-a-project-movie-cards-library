import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Data } />
      <Rating />
    </div>
  );
}

export default App;
