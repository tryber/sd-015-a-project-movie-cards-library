import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card" key={ title }>
        <img src={ imagePath } alt="" className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle ">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}
MovieCard.defaultProps = {
  title: '',
  subtitle: '',
  storyline: '',
  imagePath: '',
  movie: {},
  rating: '',
};

MovieCard.propTypes = {
  rating: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  movie: PropTypes.instanceOf(Object),
};

export default MovieCard;
