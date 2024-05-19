import { createSlice } from '@reduxjs/toolkit';

const initState = {
    source: '',
    index: -1,
    passages: []
}

const sliceTemplate = createSlice({
    name: 'groundTruth',
    initialState: 0,
    reducers: {
        groundTruthReset: (state, action) => initState,
        groundTruthSet: (state, action) => {
            const { source, index, passages } = action.payload;
            state.source = source;
            state.index = index;
            state.passages = [...passages];
            return state;
        }
    }
});

export const { groundTruthReset, groundTruthSet } = sliceTemplate.actions;

export default sliceTemplate.reducer;