// implement MovieCard component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  storyline: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};
