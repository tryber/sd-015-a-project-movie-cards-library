import React from 'react';
import './App.css';
import Header from './components/Header';
// import Moviedata from './data';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <MovieList movie={ data } />
      </section>
    </div>
  );
}

export default App;
