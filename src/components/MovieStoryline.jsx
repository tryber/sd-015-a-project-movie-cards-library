import React from 'react';

class MovieStoryline extends React.Component {
  render() {
    const { storyline } = this.props;
    console.log('Storyline retrieven:', storyline);
    return (
      <p>{ storyline }</p>
    );
  }
}

export default MovieStoryline;
