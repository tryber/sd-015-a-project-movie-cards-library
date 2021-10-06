import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <div className="movie-list">
        <MovieList movies={ movies } />
      </div>
      {/* Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
    </div>
  );
}

export default App;
