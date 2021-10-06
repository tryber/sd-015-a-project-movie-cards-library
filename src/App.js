import React from 'react';
import './App.css';
import Head from './components/Header';
import MovieL from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Head />
      <MovieL movies={ data } />
    </div>
  );
}

export default App;
