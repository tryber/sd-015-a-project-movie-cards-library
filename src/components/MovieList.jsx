// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movieList">
        {movies.map((whichMovie, index) => (
          <MovieCard key={ movies[index].title } movie={ whichMovie } />
        ))}
      </main>
    );
  }
}

export default MovieList;
