import React from 'react';

const DetailsMovies = (props) => {
    const urlImg = 'https://image.tmdb.org/t/p/w500'

    const {
        movie: {
            original_title,
            release_date,
            poster_path,
            backdrop_path,
            overview,
            runtime,
            vote_average,
            genres
        }
    } = props

    console.log(genres)
    return (
        <div>
            <div className={'photoDetails'}>
                <div className={'img'}>
                    <p className={'vote_average'}>{vote_average}</p>
                    <img src={urlImg + poster_path} alt={original_title} className={'main'}/>
                    <img src={urlImg + backdrop_path} alt={original_title} className={'child'}/>
                </div>
                <div className={'detailsMovies'}>
                    <h1>{original_title}</h1>
                    <p className={'overview'}>{overview}</p>
                    <p><b>Release_date: </b>{release_date}</p>
                    <p><b>Runtime: </b>{runtime} min.</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsMovies;