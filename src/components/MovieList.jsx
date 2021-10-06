// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
}

// MovieList.defaultProps = { // -> COMO FOI USADO isRequired NO MOVIELIST.PROPTYPES, O DEFAULT NÃO É NECESSÁRIO!
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     title: '',
//     subtitle: '',
//     storyline: '',
//     rating: 0,
//     imagePath: '',
//   }))
// }

export default MovieList;
