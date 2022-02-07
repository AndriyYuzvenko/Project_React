import {configureStore} from "@reduxjs/toolkit";
import genresReducer from '../genres.splice/genres.splise'
import popularMoviesReducer from "../popularMovies.splice/popularMovies.splice";

const store = configureStore({
    reducer: {
        genresReducer,
        popularMoviesReducer
    }
})

export default store