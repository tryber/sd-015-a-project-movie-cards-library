import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filmes } = this.props;
    console.log(filmes);
    return ({
      filmes.map((filme) => {
        return (
          <MovieCard movie={ filme } />
        )
      })
    });
  }
}

MovieList.propTypes = {
  filmes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagepath: PropTypes.string,
    rating: PropTypes.number,
  })),
};

MovieList.defaultProps = {
  filmes: [],
};

export default MovieList;
