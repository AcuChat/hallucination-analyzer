import { createSlice } from '@reduxjs/toolkit';

const initState = {
    currentResponseIndex: -1,
    responses: [],
    start: false,
    end: false
}

const sliceTemplate = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        responsesReset: (state, action) => initState,
        responsesNext: (state, action) => {
            const test = state.currentResponseIndex + 1;
            if (test >= state.responses.length) return;
            state.currentResponseIndex = test;
            state.start = state.responses.length === 0 ? true : false;
            state.end = state.currentResponseIndex === (state.responses.length - 1) ? true : false;
            return state;
        },
        responsesPrev: (state, action) => {
            if (state.currentResponseIndex <= 0) return;
            state.currentResponseIndex = state.currentResponseIndex - 1;
            state.start = state.responses.length === 0 ? true : false;
            state.end = state.currentResponseIndex === (state.responses.length - 1) ? true : false;
            return state;
        }
    }
});

export const { responsesReset, responsesNext, responsesPrev } = sliceTemplate.actions;

export default sliceTemplate.reducer;