import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../store/popularMovies.splice/popularMovies.splice";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import './GenresMoviesPage.css'
import {moviesNext} from "../../store/popularMovies.splice/popularMovies.splice";


const GenresMoviesPage = () => {
    const {movies, status, error, idGenres} = useSelector(state => state['popularMoviesReducer'])
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        dispatch(getMovies(pageNumber))
    }, [pageNumber])
    const next = () => {
        if (pageNumber >= 32233) {
        } else {
            setPageNumber(pageNumber + 1)
        }
    }
    const prev = () => {
        if (pageNumber <= 1) {
        } else {
            setPageNumber(pageNumber - 1)
        }
    }
    return (
        <div>
            <div className={'genresMoviesPage'}>
                <div className={'button'}>
                    <div>
                        <button onClick={prev}>Prev</button>
                    </div>
                    <div>
                        <button onClick={next}>Next</button>
                    </div>
                </div>
                <div className={'content'}>
                    {status === 'pending' && <h1>Loading...</h1>}
                    {error && <h1>{error}</h1>}

                    {movies.filter(item => item.genre_ids.includes(idGenres)).map(movie => <PopularMovies
                        key={movie.id} movie={movie}/>)}
                </div>
            </div>

        </div>
    );
};


export default GenresMoviesPage;