import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyLine, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyLine }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

export default MovieCard;
