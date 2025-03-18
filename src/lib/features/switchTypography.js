'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  font: 'nunito',
  size: 'small'
};

export const switchTypography = createSlice({ 
  name: 'switcTypography',
  initialState,
  reducers: {
    setFont(state, action) {
      state.color = action.payload;    
    },
    setSize(state, action) {
      state.size = action.payload;    
    },
  }
});

export const { setFont, setSize } = switchTypography.actions;

export default switchTypography.reducer;
