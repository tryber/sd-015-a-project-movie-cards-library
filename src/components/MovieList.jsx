import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {
          data.map((element) => <MovieCard movies={ element } key={ element.title } />)
        }
      </div>
    );
  }
}

export default MovieList;
