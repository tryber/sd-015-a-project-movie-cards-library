import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
// importa o React, o header, movieList e o Json movies

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
    // cria uma div pra ser pai dos demais elementos (pois tem mais de um )
    // chama o arquivo header que contem o cabeçalho do projeto.
    // chama a class MovieList e atribui o valor de movies que contem na sua composição o array movies do arquvido data.js (agora o codigo roda usando esses dados como parametro)
  );
}

export default App;
// exporta a function app pro arquvio index.js (main
