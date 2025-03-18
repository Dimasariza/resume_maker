'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: 'blue',
};

export const switchColor = createSlice({ 
  name: 'switcColor',
  initialState,
  reducers: {
    setColor(state, action) {
      state.color = action.payload;    
    },
  }
});

export const { setColor } = switchColor.actions;

export default switchColor.reducer;
