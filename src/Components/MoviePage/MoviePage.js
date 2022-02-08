import React from 'react';
import {Link, NavLink} from "react-router-dom";

const MoviePage = (props) => {
    const {movie: {id,original_title, release_date, poster_path}} = props
    const urlImg = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            <div className={'photo'}>
                <img src={urlImg + poster_path} alt={original_title}/>
            </div>
            <div className={'details'}>
                <h3>{original_title}</h3>
                <p>{release_date}</p>
                <NavLink to={id.toString()}><button>Details</button></NavLink>
            </div>
        </div>
    );
};

export default MoviePage;