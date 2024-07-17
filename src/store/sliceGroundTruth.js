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
            const {source} = action.payload;

            state.source = source;
            return state;
        },
        groundTruthSetErrors: (state, action) => {
            if (lodash.isEqual(state.errors, action.payload)) return;
            state.errors = lodash.cloneDeep(action.payload);
            return state;
        }
    }
});

export const { groundTruthReset, groundTruthSet, groundTruthSetErrors } = sliceTemplate.actions;

export default sliceTemplate.reducer;