import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import dataMovies from './data';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ dataMovies } />
    </>
  );
}

export default App;
