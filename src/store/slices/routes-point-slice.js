import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    routesPoint: {},
}

const routesPointSlice = createSlice({
    name: 'routesPoint',
    initialState,
    reducers:{
        setRoutesPoint: (state, actions) => {
            state.routesPoint = actions.payload;
        },
        clearRoutesPoint: (state) => {
            state.routesPoint = {};
        }
    }
})

export const {
    setRoutesPoint,
    clearRoutesPoint,
} = routesPointSlice.actions;

export default routesPointSlice.reducer;