import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagepath: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
