import React from 'react';
import MovieCard from './MovieCard';
import '../data';
import PropTypes from 'prop-types'

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
  movies : PropTypes.array,
};

export default MovieList;
