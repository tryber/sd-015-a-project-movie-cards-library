import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return movies.map((item, index) => (<li key={ index }><MovieCard /></li>));
  }
}

export default MovieList;
