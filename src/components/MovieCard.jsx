import React from 'react';
// import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    // const { movie: title, subtitle, storyline, rating, imagePath } = this.props;
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt=" " />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
