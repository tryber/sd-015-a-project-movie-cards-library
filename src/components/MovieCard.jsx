import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="" className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movies: {
    title: '',
    subtitle: '',
    storyline: '',
    imagePath: '',
  },
};

export default MovieCard;
