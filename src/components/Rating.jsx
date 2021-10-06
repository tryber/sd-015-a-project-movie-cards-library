import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <p>{ rating }</p>
      </div>
    );
  }
}

// propTypes
Rating.propTypes = {
  rating: propTypes.number,
};

// Consulta: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
Rating.defaultProps = {
  rating: null,
};

export default Rating;
