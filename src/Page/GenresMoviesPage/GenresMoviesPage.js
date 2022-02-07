import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../store/popularMovies.splice/popularMovies.splice";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";

const GenresMoviesPage = () => {
    const {movies}=useSelector(state=>state['popularMoviesReducer'])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMovies())
    })
    return (
        <div>
            {/*{movies.map(movie=><PopularMovies key={movie.id} movie={movie}/>)}*/}
        </div>
    );
};

export default GenresMoviesPage;