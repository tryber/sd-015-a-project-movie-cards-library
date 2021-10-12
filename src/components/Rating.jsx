// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
  const { rat } = this.props;
  return (
    <h3 className="rating">{ rat }</h3>
    );
  }
}
  Rating.propTypes = {
  rat: propTypes.number,
}.isRequired;
export default Rating;
