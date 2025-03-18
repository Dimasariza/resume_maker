'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "Picture": true,
    "Location": true,
    "About Me": true,
    "Phone Number": true,
    "Role": true,
    "Email": true,
    "Work Experience": true,
    "Website": true,
    "Education": true,
    "LinkedIn": false,
    "Skills": true,
    "Custom 1": false,
    "Languages": false,
    "Custom 2": false,
    "Hobbies": false,
    "Custom": [ ]
}

export const switchSection = createSlice({ 
  name: 'switcSection',
  initialState,
  reducers: {
    switchToggle(state, action) {
        state[action.payload] = !state[action.payload]
    }, 
    addCustomTemplate(state, action) {
        state.Custom = [...state.Custom, {...action}]
    }
  }
});

export const { 
    addCustomTemplate,
    switchToggle
} = switchSection.actions;

export default switchSection.reducer;
