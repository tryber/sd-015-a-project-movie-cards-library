import React from 'react';
import PropTypes from 'prop-types';

function createImage(props) {
  return (
    <div className="movie-card">
      <img alt="" src={ props.imagePath } className="movie-card-image" />
      <h4 alt="" className="movie-card-title">{props.title}</h4>
      <h5 alt="" className="movie-card-subtitle">{props.subtitle}</h5>

    </div>
  );
}

class MovieCard extends React.Component {
  render() {
    const { EachMovie } = this.props;
    return (
      createImage(EachMovie)
    );
  }
}

MovieCard.propTypes = {
  EachMovie: PropTypes.string.isRequired,
};

export default MovieCard;
