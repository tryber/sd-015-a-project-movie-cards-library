import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <Header class="movie-card-header" />
      <MovieList movie={ data } />
    </div>
  );
}

export default App;
