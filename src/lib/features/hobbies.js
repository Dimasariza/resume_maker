'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfHobbies: [
    { id: '0', title: '1' },
    { id: '1', title: '2' },
    // { id: '2', title: '3' },
  ]
};

export const hobbies = createSlice({ 
  name: 'hobbies',
  initialState,
  reducers: {
    setHobbiesTitle(state, action) {
        state.title = action.payload;    
    },
    setHobbie(state, action) {
        state.listOfHobbies = reconstructData(state.listOfHobbies, action, "title") 
    },
    addHobbie(state, action) {
        state.listOfHobbies = [...state.listOfHobbies, {title: '', id: state.listOfHobbies.length.toString()}]
    },
  }
});

export const { setHobbiesTitle, setHobbie, addHobbie } = hobbies.actions;

export default hobbies.reducer;
