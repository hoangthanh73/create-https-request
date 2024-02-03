import classes from './Movie.module.css';

const Movie = ({ title, openingText, releaseDate }) => {
    return (
        <li className={classes.movie}>
            <h1>{title}</h1>
            <h2>{releaseDate}</h2>
            <p>{openingText}</p>
        </li>
    )
}

export default Movie;