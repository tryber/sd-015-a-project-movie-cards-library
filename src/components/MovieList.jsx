import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // console.log(movies);
    return (
      <div>
        {
          movies.map((movie) => (
            // console.log(movie)
            <MovieCard key={ movie.title } movie={ movie } />
          ))
        }
      </div>
    );
  }
}

export default MovieList;
