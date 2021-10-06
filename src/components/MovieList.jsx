// implement MovieList component here
import React from 'react';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <MovieCards />
      </div>);
  }
}

export default MovieList;
