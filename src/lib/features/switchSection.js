'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  picture: true,
  location: true,
  aboutMe: true,
  phone: true,
  role: true,
  email: true,
  exp: true,
  web: true,
  education: true,
  linkedIn: false,
  skills: true,
  custom1: false,
  language: false,
  custom2: false,
  hobbies: false,
  Custom: [ ]
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
