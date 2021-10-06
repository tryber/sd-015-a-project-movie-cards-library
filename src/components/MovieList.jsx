import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((mv) => (<div key={ mv.title }>
        <MovieCard key={ mv.title } movie={ mv } />
      </div>)));
  }
}

export default MovieList;
