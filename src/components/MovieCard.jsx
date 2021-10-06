import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img src={ movie.imagePath } alt="" />
      </div>
    );
  }
}

export default MovieCard;
