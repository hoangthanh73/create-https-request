import { useRef } from 'react';
import classes from './AddMovie.module.css';

const AddMovie = () => {
    const titleRef = useRef();
    const openingTextRef = useRef();
    const releaseDateRef = useRef();

    const handlerPostMovie = (event) => {
        event.preventDefault();
        const title = titleRef.current.value;
        const openingText = openingTextRef.current.value;
        const releaseDate = releaseDateRef.current.value;

        const postMovie = async (url = "", data = {}) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return response.json();
        }

        if (!title || !openingText || !releaseDate) {
            alert('Vui lòng nhập đầy đủ dữ liệu!');
        } else {
            postMovie('https://learning-request-api-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
                { title, openingText, releaseDate });
            titleRef.current.value = "";
            openingTextRef.current.value = "";
            releaseDateRef.current.value = "";
        }
    }

    return (
        <form>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input ref={titleRef} id="title" type="text" placeholder="" />
            </div>
            <div className={classes.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea ref={openingTextRef} id="opening-text" placeholder="" />
            </div>
            <div className={classes.control}>
                <label htmlFor="release-date">Release Date</label>
                <input ref={releaseDateRef} id="release-date" type="date" placeholder="" />
            </div>
            <button onClick={handlerPostMovie}>Add Movie</button>
        </form>
    )
};

export default AddMovie;