// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}
// source: https://stackoverflow.com/questions/54155412/error-map-in-missing-props-reactjs-proptypes
// and: https://stackoverflow.com/questions/64012257/proptype-name-is-not-required-but-has-no-corresponding-defaultprops-declarati
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ // aparentemente pode usar o objectOf tbm
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      retina: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
