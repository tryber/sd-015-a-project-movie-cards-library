import React from 'react';
// import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    // const { movie: title, subtitle, storyline, rating, imagePath } = this.props;
    const { movie } = this.props;
    return (
      <div>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <img src={ movie.imagePath } alt=" " />
      </div>
    );
  }
}

/*
MovieCard.propTypes = {
  movie: PropTypes(PropTypes.object).isRequired,
};
*/
export default MovieCard;
