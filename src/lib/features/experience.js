'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfExperiences: [
    { 
        employeer: '',
        position: '',
        fromUntil: '',
        description: ''
    }
  ]
};

export const experience = createSlice({ 
  name: 'experience',
  initialState,
  reducers: {
    setExpTitle(state, action) {
        state.title = action.payload;    
    },
    setEmployeer(state, action) {
        state.listOfExperiences = reconstructData(state.listOfExperiences, action, "employeer") 
    },
    setPosition(state, action) {
        state.listOfExperiences = reconstructData(state.listOfExperiences, action, "position") 
    },
    setExpFromUntil(state, action) {
        state.listOfExperiences = reconstructData(state.listOfExperiences, action, "fromUntil") 
    },
    setDescription(state, action) {
        state.listOfExperiences = reconstructData(state.listOfExperiences, action, "description") 
    },
    addExperience(state, action) {
        state.listOfExperiences = [...state.listOfExperiences, initialState.listOfExperiences[0]]
    },
  }
});

export const { setExpTitle, setEmployeer, setPosition, setExpFromUntil, setDescription, addExperience } = experience.actions;

export default experience.reducer;
