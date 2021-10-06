import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      data.map((element) => (<MovieCard movies={ element } key={ element.title } />))
    );
  }
}

export default MovieList;
