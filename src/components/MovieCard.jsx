// implement MovieCard component here
import React from 'react';
import { shape, string, number } from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    title: string,
    subtitle: string,
    storyline: string,
    rating: number,
    imagePath: string,
  }).isRequired,
};

export default MovieCard;
