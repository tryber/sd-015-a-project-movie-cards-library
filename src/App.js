import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={ Movies } />
    </div>
  );
}

export default App;
