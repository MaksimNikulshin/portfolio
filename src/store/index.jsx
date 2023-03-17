import { configureStore } from '@reduxjs/toolkit'
import about from './slices/about'


const store = configureStore({
    reducer:{
        aboutReducer: about
    }
})

export default store