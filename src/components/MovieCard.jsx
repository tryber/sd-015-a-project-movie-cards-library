// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="img movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating className="rating" />
      </div>
    );
  }
}
