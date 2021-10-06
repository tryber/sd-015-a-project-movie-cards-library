import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <img src={ movie.imagePath } alt="Imagem do Filme" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf().isRequired,
};

export default MovieCard;
