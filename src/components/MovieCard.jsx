import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div className="movie">
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape().isRequired,
};

export default MovieCard;
