// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movieElement) => (
          <MovieCard
            movie={ movieElement }
            key={ movieElement.title }
          />
        ))}
      </div>
    );
  }
}
MovieList.propTypes = [{
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}];

export default MovieList;
