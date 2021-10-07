import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieCard';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList filmes={ movies } />
    </div>
  );
}

export default App;
