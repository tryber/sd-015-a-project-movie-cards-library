import React from 'react';
import '../App';
import '../App.css'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div key={movie.title} className='movie-card'>
      </div>
    )
  }
}

export default MovieCard