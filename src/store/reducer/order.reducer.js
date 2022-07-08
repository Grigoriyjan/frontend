import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../api/axios.order'

export const orderFetch = createAsyncThunk(
    'order/fetch',
    async(p, {rejectWithValue}) => {
        try {
            const res = await axios.get('services')
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const orderSlice = createSlice ({
    name:'orders',
    initialState:{
        loading:'',
        error:null,
        services:[]
    },
    extraReducers:{
        [orderFetch.pending]: (state) => {
            state.loading = 'loading'
        },
        [orderFetch.fulfilled]: (state, action) => {
            state.loading = 'complete'
            state.services = action.payload.data
        },
        [orderFetch.rejected]: (state, action ) =>{
            state.loading = 'error'
            state.error = action.error
        }
    }
})