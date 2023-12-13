import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

const dateTimeSlice = createSlice({
    name: 'dateTime',
    initialState: {
        dateTime: moment().valueOf(),
    },
    reducers: {
        setCurrentDateTime: (state, action) => {
            state.dateTime = action.payload;
        },
    },
});

export const { setCurrentDateTime } = dateTimeSlice.actions;
export default dateTimeSlice.reducer;