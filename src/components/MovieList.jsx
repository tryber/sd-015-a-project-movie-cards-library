// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((film, index) => <MovieCard key={ film.index } movie={ film.title } />)
    );
  }
}

export default MovieList;
