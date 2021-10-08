import React from 'react';

import movies from '../data';

const { title, subtitle, storyline } = movies;
class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
