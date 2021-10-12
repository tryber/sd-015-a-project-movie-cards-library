// implement MovieCard component here
import React from 'react';
import propTypes from 'Prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;

    return (
      <header>
        <h1>Movie Cards Library</h1>
        <img className="movie-card-img" src={ imagePath } alt="img the movie" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
      </header>);
  }
}
MovieCard.propTypes = {
  Movie: propTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: propTypes.string,
  }).isRequired,
};
export default MovieCard;
