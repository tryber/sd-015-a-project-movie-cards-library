// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../css/movieList.css';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const elements = movies
      .map((movie) => (<MovieCard key={ movie.title } movie={ movie } />));
    return (
      <div className="movie-list-container">
        { elements }
      </div>
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
};

export default MovieList;
