// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movieList">
        {
          movies.map((whichMovie) => (
            <MovieCard movie={ whichMovie } key={ whichMovie.title } />
          ))
        }
      </main>
    );
  }
}

export default MovieList;
