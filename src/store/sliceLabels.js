import { createSlice } from '@reduxjs/toolkit';

const labels = [
    {
        id: '1d0a0609af5a211f019d85c6e13441ff',
        name: 'Evident Conflict',
        selected: true,
        // color: "#ba1004",
        color: "rgba(255, 0, 0, 0.8)"
    },
    {
        id: '1de8236cc30422921bc6a6856aebf230',
        name: 'Subtle Conflict',
        selected: true,
        color: "rgb(172, 49, 189, .6)"
    },
    {
        id: '6bf3885d84c306f2d44371ad636c7d72',
        name: 'Evident Baseless Info',
        selected: false,
        color: "#FB8C00"
    },
    {
        id: 'fb882e538e93da73e87137cef73ca4fe',
        name: 'Subtle Baseless Info',
        selected: false,
        color: "#f5f256"
    }
]

if (window.location.hostname !== 'localhost') {
    labels.pop();
    labels.pop();
}

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