// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // desestruturação do parametro recebido do movieList
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="movie-card movie-card-body" key={ title }>
        <img className="movie-card-image" src={ imagePath } alt="filmeImg" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

// fonte: https://www.codegrepper.com/code-examples/javascript/frameworks/dist/defaultProps+in+react , olhei apenas o isRequired que o lint tava engasgando.

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
