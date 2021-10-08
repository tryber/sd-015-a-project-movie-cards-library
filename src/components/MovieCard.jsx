import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <p>teste</p>
    );
  }
}

export default MovieCard;