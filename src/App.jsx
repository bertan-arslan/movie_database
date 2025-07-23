import React, { useEffect, useState } from 'react';

import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import EditMovieForm from './components/EditMovieForm';
import MovieHeader from './components/MovieHeader';
import FavoriteMovieList from './components/FavoriteMovieList';
import axios from 'axios';
import useLocalStorage from './hooks/useLocalStorage';
import { AddMovieForm } from './components/AddMovieForm';

const App = (props) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useLocalStorage('s11d3', true);

  useEffect(() => {
    axios
      .get('https://nextgen-project.onrender.com/api/s11d3/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteMovie = (id) => {
    axios
      .delete(`https://nextgen-project.onrender.com/api/s11d3/movies/${id}`)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== id)
        );
        setFavorites((prevFavs) => prevFavs.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      const alreadyExist = prev.find((fav) => fav.id === movie.id);
      if (alreadyExist) return prev;
      return [...prev, movie];
    });
  };

  return (
    <div
      id="main-container"
      className={darkMode ? 'dark bg-slate-900 h-screen' : ''}
    >
      <nav className=" bg-zinc-800 text-white px-6 py-3 dark:bg-gray-800 ">
        <h1 className="text-xl text-white">HTTP / CRUD Film Projesi</h1>{' '}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            data-testid="darkMode-toggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 font-medium text-gray-900 dark:text-gray-300">
            {darkMode ? 'Dark Mode On' : 'Dark Mode Off'}
          </span>
        </label>
      </nav>
      <div className=" max-w-4xl mx-auto px-3 pb-4 ">
        <MovieHeader />
        <div className="flex flex-col sm:flex-row gap-4">
          <FavoriteMovieList
            //darkMode={darkMode}
            favorites={favorites}
          />
          <Switch>
            <Route path="/movies/edit/:id">
              <EditMovieForm addToFavorites={addToFavorites} />
            </Route>
            <Route path="/movies/add">
              <AddMovieForm setMovies={setMovies} />
            </Route>
            <Route path="/movies/:id">
              <Movie
                addToFavorites={addToFavorites}
                deleteMovie={deleteMovie}
              />
            </Route>
            <Route path="/movies">
              <MovieList movies={movies} />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
