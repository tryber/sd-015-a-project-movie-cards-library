import React from 'react';

class MovieCard extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movie: { imagePath, title, subtitle, storyline } } = this.props;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="movie-img" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
