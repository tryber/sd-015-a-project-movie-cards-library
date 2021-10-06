import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ data } />
    </>
  );
}

export default App;
