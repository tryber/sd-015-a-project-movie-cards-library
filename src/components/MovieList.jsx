import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// importa react proptypes e a class MovieCard do arquivo '/MovieCard'

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    // define que quando um valor for atribuido a constante movies será capturado as propŕiedades do objeto.
    return (
      <main>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </main>
      // essa main faz um novo array usando o map com cada elemento dentro do Array no formato definido pelo arquivo MovieCard, atribui também uma chave pra cada (no caso o titulo do filme) -- (confesso que não compreendi 100% esse map mas consegui fazer baseado na aula online da turma 14-a react components 11.2 )
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  )).isRequired,
};
// define que as propriedades do array passado tem que ser condizentes com o que foi setado.
export default MovieList;
