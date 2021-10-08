import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies}
      </div>
    );
  }
}

export default MovieList;
