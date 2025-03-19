'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLayout: 'split'
};

export const switchLayoutSlice = createSlice({ 
  name: 'switchLayout',
  initialState,
  reducers: {
    setLayout(state, action) {
      state.activeLayout = action.payload;    
    }
  }
});

export const { setLayout } = switchLayoutSlice.actions;

export default switchLayoutSlice.reducer;
