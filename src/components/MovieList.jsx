import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { filmes } = this.props;
    return filmes.map((filme) => <MovieCard key={ filme.title } movie={ filme } />);
  }
}

MovieList.propTypes = {
  filmes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagepath: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
