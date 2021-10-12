// implement MovieCard component here
import React from 'react';
import propTypes from 'Prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath } } = this.props;
    return (
      <header>
        <h1>Movie Cards Library</h1>
        <img src={ imagePath } alt="img the movie" />

      </header>);
  }
}
MovieCard.propTypes = {
    Movie: propTypes.shape({
    imagePath: propTypes.string,
    }).isRequired,    
}
export default MovieCard;
