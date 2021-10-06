import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
