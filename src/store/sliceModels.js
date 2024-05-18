import { createSlice } from '@reduxjs/toolkit';

const initState = {
    availableModels: [
        'gpt-4-0613',
        'gpt-3.5-turbo-0613'
    ],
    curModel: 'gpt-4-0613'
}

const sliceModels = createSlice({
    name: 'models',
    initialState: initState,
    reducers: {
        modelsReset: (state, action) => {
            state.initialState = initState;
            return state;
        },
        modelsSetModel: (state, action) => {
            state.curModel = action.payload;
            return state;
        }
    }
});

export const { modelsReset, modelsSetModel } = sliceModels.actions;

export default sliceModels.reducer;