import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { nota } = this.props;
    return (
      <p>{ nota }</p>
    );
  }
}

Rating.propTypes = {
  nota: PropTypes.number,
};

Rating.defaultProps = {
  nota: 2,
};

export default Rating;
