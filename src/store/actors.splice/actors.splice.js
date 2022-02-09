import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {actorsService} from '../../service/actors.service/actors.service';

export const getActors = createAsyncThunk(
    'actorsSplice/getActors',
    async (id, {rejectWithValue}) => {
        try {
            const actors = await actorsService.getAll(id)
            console.log(actors.cast)
            return actors.cast
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const actorsSplice = createSlice({
    name: 'actorsSplice',
    initialState: {
        actors: []
    },
    extraReducers: {
        [getActors.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getActors.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.actors = action.payload
        },
        [getActors.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const actorsReducer = actorsSplice.reducer
export default actorsReducer