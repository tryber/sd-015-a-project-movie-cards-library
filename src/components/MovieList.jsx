import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // const movies = this.props.movies
    const { movies } = this.props;
    return (
      <div>
        { movies.map((elemento) => <MovieCard key={ elemento.title } movie={ elemento } />) }
      </div>
    );
  }
}

export default MovieList;
