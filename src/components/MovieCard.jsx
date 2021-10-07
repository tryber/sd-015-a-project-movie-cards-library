import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div key={ title }>
        <div>
          <img src={ imagePath } alt={ subtitle } />
        </div>
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div>
          <p>{rating}</p>
        </div>
      </div>
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
  }).isRequired,
};

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
