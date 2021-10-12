import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';
import MovieList from './components/MovieList';

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />

    </div>
  );
}

export default App;
