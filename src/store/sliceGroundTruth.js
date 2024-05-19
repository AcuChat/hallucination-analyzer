import { createSlice } from '@reduxjs/toolkit';
import lodash from 'lodash';

const initState = {
    source: '',
    index: -1,
    passages: [],
    errors: []
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
        },
        groundTruthSetErrors: (state, action) => {
            if (state.errors.length) return;
            state.errors = lodash.cloneDeep(action.payload);
            return state;
        }
    }
});

export const { groundTruthReset, groundTruthSet, groundTruthSetErrors } = sliceTemplate.actions;

export default sliceTemplate.reducer;