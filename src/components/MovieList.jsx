// implement MovieList component here
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { title, imagePath, subtitle } = this.props.movies;

    return (
      movies.map((movie) => (
        <div>
          <image src={ this.props.imagePath } alt={ this.props.subtitle }/>;
          <p>{ title:{ this.props.title } }</p>
        </div>

      ))
    );
  }
}

export default MovieList;
