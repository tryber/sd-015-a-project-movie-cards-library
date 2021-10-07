import React from 'react';
import './App.css';
import Header from './components/Header';
import moviesData from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ moviesData } />
    </div>
  );
}

export default App;
