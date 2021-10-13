import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';
import movies from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieCard />
      <MovieList movies={ movies } />
      <Rating />
    </div>
  );
}

export default App;
