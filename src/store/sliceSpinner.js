import { createSlice } from '@reduxjs/toolkit';

const initState = false;

const sliceSpinner = createSlice({
    name: 'spinner',
    initialState: initState,
    reducers: {
        spinnerSet: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { spinnerSet } = sliceSpinner.actions;

export default sliceSpinner.reducer;