import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      Hora de codar!
      <MovieCard />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
