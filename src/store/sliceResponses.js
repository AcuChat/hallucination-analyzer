import { createSlice } from '@reduxjs/toolkit';
import lodash from 'lodash';

const initState = {
    currentResponseIndex: -1,
    responses: [],
    start: false,
    end: false
}

const sliceTemplate = createSlice({
    name: 'responses',
    initialState: initState,
    reducers: {
        responsesReset: (state, action) => initState,
        responsesNext: (state, action) => {
            const test = state.currentResponseIndex + 1;
            if (test >= state.responses.length) return;
            state.currentResponseIndex = test;
            state.start = state.currentResponseIndex === 0 ? true : false;
            state.end = state.currentResponseIndex === (state.responses.length - 1) ? true : false;
            return state;
        },
        responsesPrev: (state, action) => {
            if (state.currentResponseIndex <= 0) return;
            state.currentResponseIndex = state.currentResponseIndex - 1;
            state.start = state.currentResponseIndex === 0 ? true : false;
            state.end = state.currentResponseIndex === (state.responses.length - 1) ? true : false;
            return state;
        },
        responsesSetResponses: (state, action) => {
            state.responses = lodash.cloneDeep(action.payload);
            state.currentResponseIndex = 0;
            state.start = state.currentResponseIndex === 0 ? true : false;
            state.end = state.currentResponseIndex === (state.responses.length - 1) ? true : false;
        }
    }
});

export const { responsesReset, responsesNext, responsesPrev, responsesSetResponses } = sliceTemplate.actions;

export default sliceTemplate.reducer;