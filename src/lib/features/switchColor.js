'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'blue',
  hexcode: '#0082e6'
};

export const switchColor = createSlice({ 
  name: 'switcColor',
  initialState,
  reducers: {
    setColorName(state, action) {
      state.name = action.payload;    
    },
    setHexcode(state, action) {
      state.hexcode = action.payload
    }
  }
});

export const { setColorName, setHexcode } = switchColor.actions;

export default switchColor.reducer;
