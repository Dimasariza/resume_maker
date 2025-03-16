'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: 'Split Layout'
};

export const switchLayoutSlice = createSlice({ 
  name: 'switchLayout',
  initialState,
  reducers: {
    setLayout(state, action) {
      state.layout = action.payload;    
    }
  }
});

export const { setLayout } = switchLayoutSlice.actions;

export default switchLayoutSlice.reducer;
