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
      state.font = action.payload;    
    },
    setFontSize(state, action) {
      state.size = action.payload;    
    },
  }
});

export const { setFont, setFontSize } = switchTypography.actions;

export default switchTypography.reducer;
