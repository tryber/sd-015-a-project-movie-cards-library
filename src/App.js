import React from 'react';
import './App.css';
import Header from './components/Header';
// import Moviedata from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
