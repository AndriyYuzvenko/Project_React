import {configureStore} from "@reduxjs/toolkit";
import genresReducer from '../genres.splice/genres.splise'
import popularMoviesReducer from "../popularMovies.splice/popularMovies.splice";
import moviesDetailsReducer from "../moviesDetails.splice/moviesDetails.splice";

const store = configureStore({
    reducer: {
        genresReducer,
        popularMoviesReducer,
        moviesDetailsReducer
    }
})

export default store