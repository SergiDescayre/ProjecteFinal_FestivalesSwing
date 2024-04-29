import {configureStore} from '@reduxjs/toolkit'
import { authUserSlice } from './authUserSlice'

export default configureStore({
    reducer:{
        authUser: authUserSlice.reducer
    }
})