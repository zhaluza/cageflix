import React, { useEffect } from 'react';
import './MovieCard.scss';

export default function MovieCard({
  name,
  img,
  year,
  summary,
  movieItem,
  setMovieSelected,
  setCurrentMovie,
  collapseBurger,
  selectionOpen
}) {
  const setCurrentMovieHandler = () => {
    if (selectionOpen === true) {
      collapseBurger();
    } else {
      setCurrentMovie(movieItem);
      setMovieSelected(true);
    }
    console.log(selectionOpen);
  };

  return (
    <div className='movie-card' onClick={setCurrentMovieHandler}>
      <img className='movie-card__img' src={img} alt={name} />

      <h2 className='movie-card__name'>{name}</h2>
      <h3 className='movie-card__year italic'>{year}</h3>
    </div>
  );
}
