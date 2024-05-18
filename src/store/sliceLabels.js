import { createSlice } from '@reduxjs/toolkit';

const labels = [
    {
        id: '1d0a0609af5a211f019d85c6e13441ff',
        name: 'Evident Conflict',
        available: true,
        selected: true,
        color: "rgba (183, 28, 28, 1)"
    }
]

const initState = {
    labels
}

const sliceLabels = createSlice({
    name: 'labels',
    initialState: initState,
    reducers: {
        labelsReset: (state, action) => {
            state.initialState = initState;
            return state;
        },
        labelsSetLabel: (state, action) => {
            const { id, selected } = action.payload;
            const label = state.labels.find(l => l.id === id);
            if (label) {
                label.selected = selected;
                return state;
            }
        }
    }
});

export const { labelsReset, labelsSetLabel } = sliceLabels.actions;

export default sliceLabels.reducer;