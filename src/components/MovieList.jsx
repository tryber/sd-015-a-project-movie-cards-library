import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const cardList = movies.map((movie) => {
      const { title } = movie;
      return (<MovieCard key={ title } movie={ movie } />);
    });
    return (
      <main className="main">
        <section className="movie-list">
          { cardList }
        </section>
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [{ ERROR: 404 }],
};

export default MovieList;
