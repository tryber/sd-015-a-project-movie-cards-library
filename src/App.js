import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div>
      <Header />
      <MovieList className="movie-list" movies={ movies } />
    </div>
  );
}

export default App;
