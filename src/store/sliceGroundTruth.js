import { createSlice } from '@reduxjs/toolkit';
import lodash from 'lodash';

const initState = {
    source: '',
    index: -1,
    passages: []
}

const sliceTemplate = createSlice({
    name: 'groundTruth',
    initialState: initState,
    reducers: {
        groundTruthReset: (state, action) => initState,
        groundTruthSet: (state, action) => {
            const { source, index, passages } = action.payload;

            if (state.source === source && state.index === index && lodash.isEqual(state.passages, passages)) {
                return initState;
            }

            state.source = source;
            state.index = index;
            state.passages = [...passages];
            return state;
        }
    }
});

export const { groundTruthReset, groundTruthSet } = sliceTemplate.actions;

export default sliceTemplate.reducer;