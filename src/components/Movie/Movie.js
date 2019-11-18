import React, { useEffect } from 'react';
import './Movie.scss';

export default function Movie({
  currentMovie,
  setMovieSelected,
  handleScroll
}) {
  // Reset scroll position to top when card loads
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger reload of Movies component
  const goBackHandler = () => {
    setMovieSelected(false);
  };

  return (
    <div className='movie'>
      <button className='btn' onClick={goBackHandler}>
        Go Back
      </button>
      <div className='video-container'>
        <iframe
          className='video-container__trailer'
          src={currentMovie.trailerURL}
          frameBorder='0'
          title={`Trailer for ${currentMovie.name}`}
        />
      </div>
      <div className='movie__info'>
        <h2 className='movie__name'>{currentMovie.name}</h2>
        <h3 className='movie__year'>({currentMovie.year})</h3>
        <p className='movie__director italic'>
          Directed by {currentMovie.director}
        </p>
        {currentMovie.genres.length === 1 ? (
          <p className='movie__genre italic'>
            Genre: {currentMovie.genres.join()}
          </p>
        ) : (
          <p className='movie__genre'>
            Genres: {currentMovie.genres.join(', ')}
          </p>
        )}
        {currentMovie.short_summary ? (
          <p className='movie__summary'>{currentMovie.short_summary}</p>
        ) : (
          <p className='movie__summary'>{currentMovie.summary}</p>
        )}
      </div>
    </div>
  );
}
