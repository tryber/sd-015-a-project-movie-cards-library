import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {movies.map((data) => <MovieCard movieName={data} key={data.title} />)}
      </div>
    )
  }

}

export default MovieList;
