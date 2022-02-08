import React from 'react';

const PopularMovies = (props) => {
    const {movie: {title, genre_ids}} = props
    return (
        <div>

            <h1>{title}</h1>

        </div>
    );
};

export default PopularMovies;