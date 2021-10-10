import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div className="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
          {/* <p>{ movie.rating }</p> */}
        </div>
      </div>
    );
  }
}

MovieCard.prototypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
    }),
  ),
};

MovieCard.defaultProps = { movies: [] };

export default MovieCard;
