// implement MovieCard component here
import React from 'react';

export default class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}
