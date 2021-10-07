import React from "react";
import "./App.css";
// capturo meu componente Header.
import Header from "./components/Header"; 
// capturo meu objeto que está contido em data.js para ser usado como valor do meu props(argumento).
import data from './data'
// uso para referenciar meu props para que eu possa usar o this.props contendo meu objeto no meu componente MovieList.
import MovieList from './components/MovieList'

function App() {
  return (
    <div>
      {/* capturo a minha tag header com import e renderizo o que é feito no componente/header. */}
      <>{Header}</>
      {/* pego meu componente MovieList e adiciono uma props(argumento) com meu objeto dentro 
      do data.js para que possa ser usado com this.props no componente MovieList. */}
      <MovieList movies={data} />
    </div>
  );
}

export default App;
