import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';

function App() {
  const realTimeAPI = 'https://learning-request-api-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json';
  const [movies, setMovies] = useState([]);

  const handlerFetchMovies = () => {
    const getMovies = async () => {
      const response = await fetch(realTimeAPI);
      if (!response.ok) {
        throw new Error('Something went wrong.');
      } else {
        const data = await response.json();
        setMovies(data);
      }
    }
    getMovies()
  }

  const handlerPostMovie = () => {
    const movie = {

    };
    const postMovie = async (url = "", data = {}) => {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    }
    postMovie(realTimeAPI)
      .then(data => console.log(data));
  }

  return (
    <>
      <section>
        <AddMovie />
        <button onClick={handlerPostMovie}>Add Movie</button>
      </section>
      <section>
        <button onClick={handlerFetchMovies}>Fetch Movies</button>
        <MoviesList movies={movies} />
      </section >
    </>

  );
}

export default App;
