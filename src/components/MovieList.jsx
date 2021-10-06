// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movieList">
        <MovieCard />
      </main>
    );
  }
}

export default MovieList;
