import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="film poster" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
    rating: Proptypes.number,
    imagePath: Proptypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: Proptypes.shape({
    title: 'Sem título',
    subtitle: 'Sem subtitulo',
    storyline: 'Sem sinópse',
    rating: 0.0,
    imagePath: 'Imagem não encontrada',
  }),
};
