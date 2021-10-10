import React from 'react';
import './App.css';

import data from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList className="movie-list" movies={ data } />
    </div>
  );
}

export default App;
