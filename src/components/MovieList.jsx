import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component { // Componente React que representa toda a área com os cards dos filmes. Será chamado dentro do Componente React de classe 'App'.
  render() {
    const { movies } = this.props; // Utilizando object destructuring para captar o array de objetos com informações de cada filme, que será passado via props.

    return (
      <main>
        { movies.map((mvObj) => <MovieCard movie={ mvObj } key={ mvObj.title } />) }
      </main>
    );
  }
}

// OBS: Uma boa forma de se renderizar algo, no React, é a partir de um array com os elementos da página. Por esse motivo, utilizei a HOF .map() acima. Essa, será responsável pelo desenvolvimento de um componente React de classe MovieCard, para cada 'mvObj' presente dentro do array 'movies'.

// PropTypes:
MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
