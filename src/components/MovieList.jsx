// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        Lista de Filmes
        { movies.title }
      </section>
    );
  }
}

export default MovieList;
