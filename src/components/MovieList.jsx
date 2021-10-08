import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
