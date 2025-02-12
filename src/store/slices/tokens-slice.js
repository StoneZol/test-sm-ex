import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    refresh_token: null,
}

const tokensSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRefreshToken: (state, action)=> {
            state.refresh_token = action.payload;
        },
        clearTokens: (state) => {
            state.token = null;
            state.refresh_token = null;
        },
    }
})

export const {
    setRefreshToken,
    setToken,
    clearTokens,
} = tokensSlice.actions;

export default tokensSlice.reducer;