import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {axiosGenres} from "../../service/axios.genres/axios.genres";
import {axiosPopularMovies} from "../../service/axios.popularMovies/axios.popularMovies";
import {logDOM} from "@testing-library/react";

export const getMovies = createAsyncThunk(
    'popularMoviesSplice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await axiosPopularMovies.getALl()
            return movies
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const popularMoviesSplice = createSlice({
    name: 'popularMoviesSplice',
    initialState: {
        movies: [],
        status: null,
        error: null
    },reducers:{
      moviesFilter:(state,action)=>{
          console.log(action.payload.id)
          console.log(state)
          // state.movies = state.movies.results.filter(item =>)
      }
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const {moviesFilter} = popularMoviesSplice.actions

const popularMoviesReducer = popularMoviesSplice.reducer
export default popularMoviesReducer