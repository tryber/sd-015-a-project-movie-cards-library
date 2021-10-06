import React from 'react';
import './App.css';
import Header from './components/Header';
import movieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header" />
      <movieList />
    </div>
  );
}

export default App;
