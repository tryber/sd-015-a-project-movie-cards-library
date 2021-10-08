/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, subtitle, storyline, rating } } = this.props;
    return (
      <div key={ title } className="movie-card">
        <img src={ imagePath } alt="movie" className="movie-card-image" />
        <p className="movie-card-title">{ title }</p>
        <p className="movie-card-subtitle">{ subtitle }</p>
        <p className="movie-card-storyline">{ storyline }</p>
        <div className="movie-card-rating">
          <p className="rating">{ rating }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    imagePath: '',
    subtitle: '',
    rating: 0,
  },
};

export default MovieCard;
