import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <>
        <img src={ imagePath } alt="Texto referente ao jogo" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,

  }),
};
MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: 'Title',
    subtitle: 'Subtitle',
    storyline: 'Storyline',
    rating: 'Rating',
    imagePath: '../../public/images/Appleseed_Alpha.jpg',

  }),
};
export default MovieCard;
