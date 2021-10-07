import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      </div>
    )
  }
}

export default MovieList;