'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  description: ''
};

export const personalSummary = createSlice({ 
  name: 'personalSummary',
  initialState,
  reducers: {
    setSummaryTitle(state, action) {
      state.title = action.payload;    
    },
    setSelfDescription(state, action) {
      state.description = action.payload;
    }
  }
});

export const { setSummaryTitle, setSelfDescription } = personalSummary.actions;

export default personalSummary.reducer;
