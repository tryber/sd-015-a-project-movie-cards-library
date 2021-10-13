import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape([{
    map: PropTypes.func,
  }]).isRequired,
};
export default MovieList;
