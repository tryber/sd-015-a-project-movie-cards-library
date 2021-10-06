import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((mv, index) => <div key={ index }>{ mv }</div>)}
      </div>
    );
  }
}

export default MovieList;
