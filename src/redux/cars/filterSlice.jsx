import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  value: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
        resetFilter(state) {
                state.value = "";
            },
    },
        
});


export const { setFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;