import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
    </div>
  );
}

export default App;
