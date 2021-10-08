// implement MovieCard component here
import React from 'react';
// import { movies } from './data';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <header>
        <div> { movie.title } </div>
        <div> { movie.subtitle } </div>
      </header>
    );
  }
}

export default MovieCard;
