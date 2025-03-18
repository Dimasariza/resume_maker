'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalTitle: '',    
    location: '',
    email: '',
    phone: '',
    url: ''
};

export const personalDetails = createSlice({ 
  name: 'personalDetails',
  initialState,
  reducers: {
    setPersonalTitle(state, action) {
        state.personalTitle = action.payload;    
    },
    setLocation(state, action) {
        state.location = action.payload;    
    },
    setEmail(state, action) {
        state.email = action.payload;
    },
    setPhone(state, action) {
        state.phone = action.payload;
    },
    setURL(state, action) {
        state.url = action.payload;
    },
  }
});

export const { setLocation, setEmail, setPhone, setURL, setPersonalTitle } = personalDetails.actions;

export default personalDetails.reducer;
