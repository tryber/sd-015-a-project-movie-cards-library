import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((e) => <MovieCard movie={ e } key={ e.title } />)}
      </div>
    );
  }
}

export default MovieList;
