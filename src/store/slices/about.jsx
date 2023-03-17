import { createSlice } from "@reduxjs/toolkit";

const about = createSlice({
    name: 'about',
    initialState: {
        modal: false
    },
    reducers: {
        aboutModal(state, action) {
            state.modal = action.payload
        } 
    }
})
export const {aboutModal} = about.actions
export default about.reducer