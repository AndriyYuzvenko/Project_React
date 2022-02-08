import React, {useEffect, useState} from 'react';
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../store/popularMovies.splice/popularMovies.splice";
import {useParams} from "react-router-dom";
import DetailsMovies from "../../Components/DetailsMovies/DetailsMovies";
import {axiosPopularMovies} from "../../service/axios.popularMovies/axios.popularMovies";
import {getMoviesDetails} from "../../store/moviesDetails.splice/moviesDetails.splice";
import './DetailsMoviesPage.css'
import {logDOM} from "@testing-library/react";
const DetailsMoviesPage = () => {
  const {movie,status,error}=useSelector(state=>state['moviesDetailsReducer'])
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
         dispatch(getMoviesDetails(id))
    }, [])
    return (
        <div>
            <div className={'genresMoviesPageDetails'}>
                <div>
                    {status === 'pending' && <h1>Loading...</h1>}
                    {error && <h1>{error}</h1>}
                    <DetailsMovies movie={movie}/>
                </div>
            </div>
        </div>
    );
};

export default DetailsMoviesPage;