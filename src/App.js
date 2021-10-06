import React from 'react';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
