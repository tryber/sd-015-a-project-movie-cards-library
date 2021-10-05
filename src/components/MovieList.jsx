import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      this.props.movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)
    );
  }
}

export default MovieList;
