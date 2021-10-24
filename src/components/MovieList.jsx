import React from 'react';
// import MovieCard from './MovieCard';
// import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie}
      </div>
    )
  }
}

export default MovieList;
