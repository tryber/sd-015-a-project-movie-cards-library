// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class Movies extends React.Component {
  render() {
    return (
        <section className="movie-list">
          { movies.map((movie, index) => (
            <MovieCard key={ `Movie Ttile ${index}`} movie= { movie }/> ))}
        </section>
    );
  }
}

export default Movies;
