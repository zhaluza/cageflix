import React, { useEffect } from 'react';
import './Selection.scss';
import movies from '../../../src/movies.json';

export default function Selection({
  setMovieList,
  genre,
  setGenre,
  decade,
  setDecade,
  rtScore,
  setRTScore,
  freakOut,
  setFreakOut,
  selectionOpen,
  setSelectionOpen
}) {
  useEffect(() => {
    submitHandle();
  }, [genre, decade, rtScore, freakOut]);

  // Slide burger nav for mobile
  function selectionSlide() {
    if (selectionOpen === true) {
      setSelectionOpen(false);
    } else {
      setSelectionOpen(true);
    }
    const burger = document.querySelector('.burger');
    const selectionMenu = document.querySelector('.selection');
    const selectionContainer = document.querySelector('.selection-container');

    selectionContainer.classList.toggle('widen-container');
    selectionMenu.classList.toggle('selection-active');
    burger.classList.toggle('toggle');
    console.log(selectionOpen);
  }

  // Selection functionality

  const selectedGenre = document.getElementById('genreSelect');
  const selectedDecade = document.getElementById('decadeSelect');
  const selectedScore = document.getElementById('rtScoreSelect');

  //// Set Selection Values on Component Reload
  useEffect(() => {
    selectElement('genreSelect', genre);
    selectElement('decadeSelect', decade);
    selectElement('rtScoreSelect', rtScore);
    defaultFreakOut();
  }, []);

  function selectElement(id, val) {
    let element = document.getElementById(id);
    element.value = val;
  }

  function defaultFreakOut() {
    const freakOutTrue = document.getElementById('freakOutTrue');
    const freakOutFalse = document.getElementById('freakOutFalse');
    if (freakOut === true) {
      freakOutTrue.checked = true;
    }
    if (freakOut === false) {
      freakOutFalse.checked = true;
    }
  }

  ////

  function showAllHandle() {
    setMovieList(
      movies.filter(movie => {
        return movie;
      })
    );
    clearSelect();
  }

  function genreHandle() {
    console.log(selectedGenre);
    console.log(selectedGenre.value);
    setGenre(selectedGenre.value);
  }

  function decadeHandle() {
    console.log(selectedDecade.value);
    setDecade(selectedDecade.value);
  }

  function rtScoreHandle(e) {
    console.log(selectedScore.value);
    setRTScore(selectedScore.value);
  }

  function freakOutHandle(e) {
    if (e.target.id === 'freakOutTrue') {
      setFreakOut(true);
    } else if (e.target.id === 'freakOutFalse') {
      setFreakOut(false);
    }
  }

  function submitHandle() {
    if (genre !== '' && decade !== '' && rtScore !== '' && freakOut !== '') {
      setMovieList(
        movies.filter(movie => {
          return (
            movie.genres.includes(genre) &&
            movie.decade === decade &&
            movie.rt_range === rtScore &&
            movie.freakout === freakOut
          );
        })
      );
    } else if (
      genre !== '' &&
      decade !== '' &&
      rtScore !== '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return (
            movie.genres.includes(genre) &&
            movie.decade === decade &&
            movie.rt_range === rtScore
          );
        })
      );
    } else if (
      genre !== '' &&
      decade !== '' &&
      rtScore === '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return (
            movie.genres.includes(genre) &&
            movie.decade === decade &&
            movie.freakout === freakOut
          );
        })
      );
    } else if (
      genre !== '' &&
      decade === '' &&
      rtScore !== '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return (
            movie.genres.includes(genre) &&
            movie.rt_range === rtScore &&
            movie.freakout === freakOut
          );
        })
      );
    } else if (
      genre === '' &&
      decade !== '' &&
      rtScore !== '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return (
            movie.decade === decade &&
            movie.rt_range === rtScore &&
            movie.freakout === freakOut
          );
        })
      );
    } else if (
      genre === '' &&
      decade === '' &&
      rtScore !== '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.rt_range === rtScore && movie.freakout === freakOut;
        })
      );
    } else if (
      genre === '' &&
      decade !== '' &&
      rtScore === '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.decade === decade && movie.freakout === freakOut;
        })
      );
    } else if (
      genre === '' &&
      decade !== '' &&
      rtScore !== '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.decade === decade && movie.rt_range === rtScore;
        })
      );
    } else if (
      genre !== '' &&
      decade === '' &&
      rtScore === '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.genres.includes(genre) && movie.freakout === freakOut;
        })
      );
    } else if (
      genre !== '' &&
      decade === '' &&
      rtScore !== '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.genres.includes(genre) && movie.rt_range === rtScore;
        })
      );
    } else if (
      genre !== '' &&
      decade !== '' &&
      rtScore === '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.genres.includes(genre) && movie.decade === decade;
        })
      );
    } else if (
      genre !== '' &&
      decade === '' &&
      rtScore === '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.genres.includes(genre);
        })
      );
    } else if (
      genre === '' &&
      decade !== '' &&
      rtScore === '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.decade === decade;
        })
      );
    } else if (
      genre === '' &&
      decade === '' &&
      rtScore !== '' &&
      freakOut === ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.rt_range === rtScore;
        })
      );
    } else if (
      genre === '' &&
      decade === '' &&
      rtScore === '' &&
      freakOut !== ''
    ) {
      setMovieList(
        movies.filter(movie => {
          return movie.freakout === freakOut;
        })
      );
    } else if (
      genre === '' &&
      decade === '' &&
      rtScore === '' &&
      freakOut === ''
    ) {
      setMovieList([]);
    }
  }

  function clearHandle() {
    setMovieList([]);
    clearSelect();
  }

  function clearSelect() {
    const selectedGenre = document.getElementById('genreSelect');
    selectedGenre.value = '';
    setGenre('');

    const selectedDecade = document.getElementById('decadeSelect');
    selectedDecade.value = '';
    setDecade('');

    const selectedScore = document.getElementById('rtScoreSelect');
    selectedScore.value = '';
    setRTScore('');

    let freakOutCheck = document.getElementsByName('freakout');
    freakOutCheck.forEach(item => {
      item.checked = false;
    });
    setFreakOut('');
  }

  // function clearGenreHandle() {
  //   let genreCheck = document.getElementsByName('genre');
  //   genreCheck.forEach(item => {
  //     item.checked = false;
  //   });
  //   setGenre('');
  // }

  // function clearDecadeHandle() {
  //   setDecade('');
  //   let decadeCheck = document.getElementsByName('decade');
  //   decadeCheck.forEach(item => {
  //     item.checked = false;
  //   });
  // }

  // function clearRTScoreHandle() {
  //   setRTScore('');
  //   let ratingCheck = document.getElementsByName('score');
  //   ratingCheck.forEach(item => {
  //     item.checked = false;
  //   });
  // }

  function clearFreakOutHandle() {
    setFreakOut('');
    let freakOutCheck = document.getElementsByName('freakout');
    freakOutCheck.forEach(item => {
      item.checked = false;
    });
  }

  return (
    <section className='selection-container'>
      <div className='selection'>
        <h1 className='selection__heading desktop-only'>CageFlix</h1>
        <div className='selection__content'>
          <h2 className='selection__subheading'>Pick Your Cage</h2>
          <div className='selection__main-btns'>
            <button className='btn' onClick={showAllHandle}>
              Show All Movies
            </button>
            <button className='btn' onClick={clearHandle}>
              Clear All Movies
            </button>
          </div>

          <div className='selection__form'>
            <div className='selection__form-section'>
              <label htmlFor='genre'>Choose a genre</label>
              <select name='genre' id='genreSelect' onChange={genreHandle}>
                <option value=''>-None-</option>
                <option value='Action'>Action</option>
                <option value='Drama'>Drama</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Horror'>Horror</option>
                <option value='Romance'>Romance</option>
                <option value='Sci-Fi'>Sci-Fi</option>
              </select>
            </div>

            <div className='selection__form-section'>
              <label htmlFor='decade'>Choose a decade</label>
              <select name='decade' id='decadeSelect' onChange={decadeHandle}>
                <option value=''>-None-</option>
                <option value='80s'>80s</option>
                <option value='90s'>90s</option>
                <option value='00s'>00s</option>
                <option value='10s'>10s</option>
                <option value='20s'>20s</option>
              </select>
            </div>
            <div className='selection__form-section'>
              <label htmlFor='rtScore'>Rotten Tomatoes Score</label>
              <select
                name='rtScore'
                id='rtScoreSelect'
                onChange={rtScoreHandle}
              >
                <option value=''>-None-</option>
                <option value='Rotten'>Rotten</option>
                <option value='60-69'>60-69</option>
                <option value='70-79'>70-79</option>
                <option value='80-89'>80-89</option>
                <option value='90-100'>90-100</option>
              </select>
            </div>

            <div className='selection__form-section freakout'>
              <p>Nic Cage Freakout?</p>
              <div className='selection__radio'>
                <div className='radio-item'>
                  <input
                    type='radio'
                    name='freakout'
                    id='freakOutTrue'
                    onClick={freakOutHandle}
                  />
                  <label htmlFor='freakOutTrue'>Yes</label>
                </div>
                <div className='radio-item'>
                  <input
                    type='radio'
                    name='freakout'
                    id='freakOutFalse'
                    onClick={freakOutHandle}
                  />
                  <label htmlFor='freakOutFalse'>No</label>
                </div>
              </div>
              <button
                className='btn clear-freakout-btn'
                onClick={clearFreakOutHandle}
              >
                Clear Freakout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='burger' onClick={selectionSlide}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </section>
  );
}
