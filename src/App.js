import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import MovieCard from './components/MovieCard';
import movie from './data';

function App() {
  return (
    <div>
      <Header />
      <MovieList />
      {movie.map((item, index) => (
        <MovieCard
          key={ index }
          title={ item.title }
          subtitle={ item.subtitle }
          storyline={ item.storyline }
        />
      ))}
    </div>
  );
}

export default App;
