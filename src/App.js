import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

import './App.css';


function App() {
  return (
    <main className="App">
      <Header />
      <MovieList />
    </main>
  );
}

export default App;
