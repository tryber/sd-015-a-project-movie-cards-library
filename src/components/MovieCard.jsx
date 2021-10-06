// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        {null}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
