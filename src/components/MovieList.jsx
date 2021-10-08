import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';
// erro doido no eslint mas ta tudo certo nessa

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        {
          movies.map((element) => (
            <div key={ element.title }>
              <MovieCard movie={ element } />
            </div>
          ))
        }
      </main>
    );
  }
}

export default MovieList;
