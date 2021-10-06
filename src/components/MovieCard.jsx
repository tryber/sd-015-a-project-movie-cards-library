// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;

    return (
      <div>
        {movies.map((elem) => (
          <div key={ elem.title }>
            <p>{elem.subtitle}</p>
            <p>{elem.storyline}</p>
            <p>{elem.imagePath}</p>
            <p>{elem.rating}</p>

          </div>
        ))}
      </div>
    );
  }
}

export default MovieCard;
