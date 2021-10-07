import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div key={ title }>
        <img src={ imagePath } alt={ subtitle } className=".movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

// estou usando o isRequired então não precisa do default
// MovieCard.defaultProps = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     title: 'titulo',
//     subtitle: 'subtitulo',
//     storyline: 'resenha',
//     rating: 0,
//     imagePath: 'imagem do filme',
//   })),
// };

export default MovieCard;
