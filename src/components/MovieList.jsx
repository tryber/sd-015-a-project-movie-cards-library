import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ul>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string,
};

MovieList.defaultProps = {
  movies: [],
};
export default MovieList;
