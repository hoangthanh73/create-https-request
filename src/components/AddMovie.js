import { useRef } from 'react';
import classes from './AddMovie.module.css';

const AddMovie = (props) => {
    const titleRef = useRef();
    const openingTextRef = useRef();
    const releaseDateRef = useRef();

    console.log(titleRef);

    const data = {
        title: titleRef.current,
        openingText: openingTextRef.current,
        releaseDate: releaseDateRef.current
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
                <input ref={releaseDateRef} id="release-date" type="text" placeholder="" />
            </div>
        </form>
    )
};

export default AddMovie;