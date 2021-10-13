import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />)}
      </div>
    );
  }
}

export default MovieList;

// torna obrigatorio que a movies(props) seja um array do tipo objeto.
// Usado o repositorio do Thiago Monteiro para fazer essa parte.
// Source: https://github.com/tryber/sd-015-a-project-movie-cards-library/pull/123/files
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
