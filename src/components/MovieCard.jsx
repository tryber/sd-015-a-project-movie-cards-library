import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>{storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
