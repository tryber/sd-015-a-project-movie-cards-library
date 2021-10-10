import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={ movies } />
      <MovieCard movie={ movies[0] } />
      <MovieCard movie={ movies[1] } />
      <MovieCard movie={ movies[2] } />
      <MovieCard movie={ movies[3] } />
      <MovieCard movie={ movies[4] } />
      <Rating />
    </div>
  );
}

export default App;
