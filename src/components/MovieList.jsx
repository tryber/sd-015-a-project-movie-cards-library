import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
render() {
  return (
    <div>
      {movies.map((name) => (
        <MovieCard 
        movie = { name }
        key = {name.title}
        />
      ))}
    </div>
  )
}
}

export default MovieList;
