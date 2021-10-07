import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard movies={ movies } />
    </div>
  );
}

export default App;
