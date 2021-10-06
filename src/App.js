import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ data } />
    </>
  );
}

export default App;
