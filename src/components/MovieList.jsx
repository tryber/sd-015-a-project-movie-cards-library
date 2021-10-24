import React from 'react';
import MovieCard from './MovieCard';
import propTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
