import React from 'react';
import { render } from 'enzyme';
import './App.css';
// capturo meu componente Header.
import Header from './components/Header';
// capturo meu objeto que está contido em data.js para ser usado como valor do meu props(argumento).
import MovieList from './components/MovieList';
import Movies from './data';

function App() {
  return (
    <div>
      {/* capturo a minha tag header com import e renderizo o que é feito no
      componente/header. */}
      <Header />
      <MovieList Movies={ Movies } />
    </div>
  );
}

export default App;
