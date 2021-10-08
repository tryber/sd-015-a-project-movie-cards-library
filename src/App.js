import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MovieList
        movies={ movies }
      />
    </div>
  );
}

export default App;
