// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {data.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
