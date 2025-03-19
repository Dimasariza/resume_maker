'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalTitle: '',    
    location: '',
    email: '',
    phone: '',
    web: '',
    linkedIn: '',
    custom1: '',
    custom2: ''
};

export const personalDetails = createSlice({ 
  name: 'personalDetails',
  initialState,
  reducers: {
    setPersonalDetials(state, action) {
        state[action.payload.key] = action.payload.value
    },
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
    setLinkedIn(state, action) {
        state.linkedIn = action.payload;
    },
    setCustom1(state, action) {
        state.custom1 = action.payload;
    },
    setCustom2(state, action) {
        state.custom2 = action.payload;
    },
  }
});

export const { 
    setLocation, 
    setEmail, 
    setPhone, 
    setURL, 
    setPersonalTitle,
    setLinkedIn,
    setCustom1,
    setCustom2,
    setPersonalDetials
} = personalDetails.actions;

export default personalDetails.reducer;
