'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfLanguages: [
    { id: '0', title: '1' },
    { id: '1', title: '2' },
    // { id: '2', title: '3' },
  ]
};

export const languages = createSlice({ 
  name: 'languages',
  initialState,
  reducers: {
    setLanguagesTitle(state, action) {
        state.title = action.payload;    
    },
    setLanguage(state, action) {
        state.listOfLanguages = reconstructData(state.listOfLanguages, action, "title") 
    },
    addLanguage(state, action) {
        state.listOfLanguages = [...state.listOfLanguages, {title: '', id: state.listOfLanguages.length.toString()}]
    },
  }
});

export const { setLanguagesTitle, setLanguage, addLanguage } = languages.actions;

export default languages.reducer;
