import React from 'react';

class MovieCard extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movie: { imagePath } } = this.props;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="" />
      </div>
    );
  }
}

export default MovieCard;
