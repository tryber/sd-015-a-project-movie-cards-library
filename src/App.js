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
      {
        movies.map((m) => <MovieCard key={ m.title } movieCard={ m } />)
      }
      <MovieList />
      <Rating />
    </div>
  );
}

export default App;
