import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        {
          movies.map((movie) => (
            <div key={ movie.title } className="movie-card">
              <p>{movie.title}</p>
              <p>{movie.subtitle}</p>
              <p>{movie.storyline}</p>
              <div>
                {movie.imagePath}
              </div>
              <p>
                {movie.rating}
              </p>
            </div>
          ))
        }
      </main>
    );
  }
}

export default MovieList;
