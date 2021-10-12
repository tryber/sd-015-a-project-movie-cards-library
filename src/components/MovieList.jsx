// implement MovieList component here
import MovieCard from './MovieCard';
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <header>
        <h1>Movie Cards Library</h1>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </header>);
  }
}

export default MovieList;
