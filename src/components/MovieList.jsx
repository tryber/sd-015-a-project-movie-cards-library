import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {
          data.map((ele, i) => <MovieCard key={ `Movie Title ${i + 1}` } movie={ ele } />)
        }
      </div>
    );
  }
}
export default MovieList;
