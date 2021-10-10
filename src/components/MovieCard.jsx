import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: {title, subtitle, storyLine, ImagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <img alt="Capa do Filme" className="movie-card-image" src={ ImagePath } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyLine }</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
