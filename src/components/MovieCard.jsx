// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt={title} />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
      </div>
    );
  }
}

export default MovieCard;
