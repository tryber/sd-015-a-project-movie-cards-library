// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // vem do App requisito pedia pra usar como props
    const { movies } = this.props;
    return (
      // passar movies para poder usar dentro da div e fazer o map.
      <div className="movie-list" movies={ movies }>
        {
          // passando movie como props para o card
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

// validar se movies está passando um array de objetos

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
