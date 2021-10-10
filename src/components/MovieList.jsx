import React from 'react';
import PropTypes from './MovieCard';
import MovieCard from './MovieCard';
import '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = { movies: [] };

export default MovieList;
