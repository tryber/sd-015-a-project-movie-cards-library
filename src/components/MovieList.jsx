import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <main className="movie-list">
        { movies.map((elem) => (<MovieCard key={ elem.title } movie={ elem } />))}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
