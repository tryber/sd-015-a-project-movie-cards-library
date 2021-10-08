import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { Movies } = this.props;
    return (
      <div>
        {
        // faço uma iteração usando map para capturar os valores 'movie'(objeto), movie.title(string),
        // a minha imagem, movie.imagepath e meu rating(number), retornando um novo array via map
          Movies.map((movie) => (
            <MovieCard
              movie={ movie }
              key={ movie.title }
              img={ movie.imagePath }
              rating={ movie.rating }
            />))
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
