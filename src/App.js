import React from 'react';
// import { render } from 'enzyme';
import './App.css';
// capturo meu componente Header.
// capturo meu objeto que está contido em data.js para ser usado como valor do meu props(argumento).
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* capturo a minha tag header com import e renderizo o que é feito no
      componente/header. */}
      <Header />
      <MovieList className="movie-list" movies={ movies } />
    </div>
  );
}

export default App;
