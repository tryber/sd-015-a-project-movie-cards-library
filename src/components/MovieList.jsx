import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((film) => <MovieCard movie={ film } key={ film.title } />)}
      </div>
    );
  }
}

export default MovieList;
