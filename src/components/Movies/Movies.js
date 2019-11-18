import React from 'react';
import './Movies.scss';
import MovieCard from '../MovieCard/index';

export default function Movies({
  movieList,
  setMovieSelected,
  setCurrentMovie,
  currentMovie,
  selectionOpen,
  setSelectionOpen
}) {
  function collapseBurger() {
    const burger = document.querySelector('.burger');
    const selectionMenu = document.querySelector('.selection');
    const selectionContainer = document.querySelector('.selection-container');

    selectionContainer.classList.remove('widen-container');
    selectionMenu.classList.remove('selection-active');
    burger.classList.remove('toggle');
    setSelectionOpen(false);
  }
  return (
    <div className='movies' onClick={collapseBurger}>
      {movieList.length < 1 ? (
        <div className='movies__introduction'>
          <p className='introduction__text'>
            Welcome to CageFlix, the world's first interactive database of
            Nicolas Cage films.
          </p>
          <p className='introduction__text italic mobile-only'>
            Tap the bars up top to get started.
          </p>
          <p className='introduction__text italic desktop-only'>
            Use the menu on the left to get started.
          </p>
        </div>
      ) : (
        <ul className='movies__list'>
          {movieList.map(movie => {
            return (
              <MovieCard
                movieItem={movie}
                key={movie.id}
                name={movie.name}
                img={movie.image}
                year={movie.year}
                summary={movie.summary}
                movieList={movieList}
                setMovieSelected={setMovieSelected}
                setCurrentMovie={setCurrentMovie}
                collapseBurger={collapseBurger}
                selectionOpen={selectionOpen}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
