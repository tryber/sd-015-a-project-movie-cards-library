import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <p className="rating">{rating}</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
// a className eu encontrei no repositorio do colega Italo Sérgio
// fonte: https://github.com/tryber/sd-015-a-project-movie-cards-library/pull/13/files
export default Rating;
