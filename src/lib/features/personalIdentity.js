'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  picture: '',
  name: '',
  role: ''
};

export const personalIdentity = createSlice({ 
  name: 'personalidentity',
  initialState,
  reducers: {
    setPicture(state, action) {
      state.picture = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;    
    },
    setRole(state, action) {
      state.role = action.payload;
    }
  }
});

export const { setName, setRole, setPicture } = personalIdentity.actions;

export default personalIdentity.reducer;
