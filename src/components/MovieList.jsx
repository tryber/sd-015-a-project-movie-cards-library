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
    );
  }
}

MovieList.propTypes = {
  movie: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
