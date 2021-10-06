import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <img src={ movie.imagePath } alt="Imagem do Filme" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf().isRequired,
};

export default MovieCard;
