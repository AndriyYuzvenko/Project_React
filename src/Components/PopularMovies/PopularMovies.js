import React from 'react';

const PopularMovies = (props) => {
    const {movie: {title}} = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default PopularMovies;