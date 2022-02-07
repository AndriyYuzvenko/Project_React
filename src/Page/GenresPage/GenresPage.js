import React, {useEffect, useState} from 'react';
import {axiosGenres} from "../../service/axios.genres/axios.genres";
import Genres from "../../Components/Genres/Genres";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../store/genres.splice/genres.splise";

const GenresPage = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGenres())
    }, [])
    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <div className={'genresColor'}>
                <h1>Всі жанри</h1>
                <div className={'genres'}>
                    {genres.map(genre => <Genres key={genre.id} genre={genre}/>)}
                </div>
            </div>
        </div>
    );
};

export default GenresPage;