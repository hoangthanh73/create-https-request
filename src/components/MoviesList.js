import { useState, useEffect } from 'react';
import classes from './MoviesList.module.css';
import Movie from "./Movie";

const MoviesList = ({ url }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handlerFetchMovies = () => {
        const getMovies = async () => {
            setIsLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setMovies(Object.values(data));
            setIsLoading(false);
        }
        getMovies();
    }

    return (
        <div>
            <button onClick={handlerFetchMovies}>Fetch Movies</button>
            <ul className={classes['movies-list']}>
                {!isLoading ? movies.map(movie => {
                    return <Movie
                        key={movie.title}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        openingText={movie.openingText}
                    />
                }) : <p>Loading...</p>}
            </ul>
        </div>
    )
};

export default MoviesList;