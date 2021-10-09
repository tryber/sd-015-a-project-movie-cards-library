import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieList movies={ movies } />
    </section>
  );
}

export default App;
