import React, { useState, useEffect, Fragment } from 'react';
import './App.scss';
import Selection from './components/Selection/index';
import Movies from './components/Movies/index';
import Movie from './components/Movie/index';
// import movies from './movies.json';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieSelected, setMovieSelected] = useState(false);
  const [currentMovie, setCurrentMovie] = useState([]);

  // SELECTION
  const [genre, setGenre] = useState('');
  const [decade, setDecade] = useState('');
  const [rtScore, setRTScore] = useState('');
  const [freakOut, setFreakOut] = useState('');
  const [selectionOpen, setSelectionOpen] = useState(false);

  // Scroll reset
  const [scrollPos, setScrollPos] = useState();
  const handleScroll = () => {
    // when component re-renders, it causes window.scrollY to be 0. We don't want
    // to update state if scrollY is 0. because scroll restoration breaks.
    if (window.scrollY !== 0) {
      setScrollPos(window.scrollY === 0);
    }
  };

  // add event listener to window when component mounts

  // restore scroll whenever loading changes
  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [currentMovie]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>CageFlix</h2>
      </header>

      <div className='container'>
        {movieSelected ? (
          <Movie
            currentMovie={currentMovie}
            setMovieSelected={setMovieSelected}
            setMovieList={setMovieList}
            handleScroll={handleScroll}
          />
        ) : (
          <Fragment>
            <Selection
              movieList={movieList}
              setMovieList={setMovieList}
              genre={genre}
              setGenre={setGenre}
              decade={decade}
              setDecade={setDecade}
              rtScore={rtScore}
              setRTScore={setRTScore}
              freakOut={freakOut}
              setFreakOut={setFreakOut}
              movieSelected={movieSelected}
              selectionOpen={selectionOpen}
              setSelectionOpen={setSelectionOpen}
            />
            <Movies
              movieList={movieList}
              setMovieSelected={setMovieSelected}
              setCurrentMovie={setCurrentMovie}
              currentMovie={currentMovie}
              selectionOpen={selectionOpen}
              setSelectionOpen={setSelectionOpen}
            />{' '}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
