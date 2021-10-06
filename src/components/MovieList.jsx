import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

const propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MovieList.propTypes = propTypes;

export default MovieList;
