import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSmallScreen: false,
    isLargeScreen: false,
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {

        setScreenSize(state, action) {
            const { isSmallScreen, isLargeScreen } =
                action.payload;
            state.isSmallScreen = isSmallScreen;

            state.isLargeScreen = isLargeScreen;
        },
    },
});

export const { setScreenSize } = layoutSlice.actions;

export default layoutSlice.reducer;
