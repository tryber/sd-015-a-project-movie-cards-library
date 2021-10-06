import React from 'react';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="movie card" />
        <p>{title}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

// MovieCard.PropTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//   }),
// };

export default MovieCard;
