import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img alt="Imagem do Filme" src={ imagePath } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{storyline}</p>
        <div>
          <Rating rating={ rating } />
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
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    storyline: '',
    imagePath: '',
    rating: 5,
  },
};

export default MovieCard;
