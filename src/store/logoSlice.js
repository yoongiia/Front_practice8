import { createSlice } from '@reduxjs/toolkit';
import logo from '../assets/logo.png'

const logoSlice = createSlice({
    name: 'logo',
    initialState: {
        src: logo,
    }
})

export default logoSlice.reducer;