/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, subtitle, storyline } } = this.props;
    return (
      <div key={ title } className="movie-card">
        <img src={ imagePath } alt="movie" className="movie-card-image" />
        <p className="movie-card-title"><h4>{ title }</h4></p>
        <p className="movie-card-subtitle">{ subtitle }</p>
        <p className="movie-card-storyline">{ storyline }</p>
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
