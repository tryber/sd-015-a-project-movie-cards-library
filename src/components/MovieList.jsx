// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {
          data.map((movies) => <MovieCard movies={ movies } key={ movies.title } />)
        }
      </div>
    );
  }
}

export default MovieList;
