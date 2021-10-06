import React, { Component } from 'react';
import Proptypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="film poster" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        {rating}
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
    subtitle: Proptypes.string.isRequired,
    storyline: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired,
    imagePath: Proptypes.string.isRequired,
  }).isRequired,
};
