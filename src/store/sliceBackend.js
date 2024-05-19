import { createSlice } from '@reduxjs/toolkit';

const initState = `https://ragtruth-processor.acur.ai:5100`

const sliceTemplate = createSlice({
    name: 'backend',
    initialState: initState,
    reducers: {
        
    }
});

export const { } = sliceTemplate.actions;

export default sliceTemplate.reducer;