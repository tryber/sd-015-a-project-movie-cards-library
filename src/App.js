import React from 'react';
import './App.css';
import moviesList from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <main>
      <Header />
      <MovieList />
    </main>
  );
}

export default App;
