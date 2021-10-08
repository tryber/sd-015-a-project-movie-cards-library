import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        {
          movies.map((element) => (
            <MovieCard key={ element.title } movie={ element } />
          ))
        }
      </main>
    );
  }
}

export default MovieList;
