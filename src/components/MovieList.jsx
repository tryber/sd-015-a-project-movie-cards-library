import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return movies.map((element) => <MovieCard key={element} />);
  }
}

export default MovieList;
