// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <ul key={ title }>
        <img src={ imagePath } alt="filmeImg" />
        <li>{ title }</li>
        <li>{ subtitle }</li>
        <li>{ storyline }</li>
        <li>{ rating }</li>
      </ul>
    );
  }
}

export default MovieCard;
