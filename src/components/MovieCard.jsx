import React from 'react';
import data from '..data/';

class MovieCard extends React.Component {
  render() {
    const {movies: { title, subtitle, storyline, rating, imagePath}} = this.props;
    return (
      <div>
        <img src={imagePath} alt={title} />
        <h4> {title} </h4>
        <h5> {subtitle} </h5>
        <p>{storyline}</p>
      </div>
    );
  }
}