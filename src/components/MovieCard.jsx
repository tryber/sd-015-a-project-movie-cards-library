import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath: src } } = this.props;

    return (
      <div className="movie-card movie-card-body">
        <img className="movie-card-image" src={ src } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    );
  }
}

const propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};

MovieCard.propTypes = propTypes;

export default MovieCard;
