// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath } } = this.props;
    return (
      <header>
        <h1>Movie Cards Library</h1>
        <img src={ imagePath } alt="" />

      </header>);
  }
}

export default MovieCard;
