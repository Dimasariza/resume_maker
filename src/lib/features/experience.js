'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfExperiences: [
    { 
        id: 'exp0000',
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
    setExpDescription(state, action) {
        state.listOfExperiences = reconstructData(state.listOfExperiences, action, "description") 
    },
    addExperience(state, action) {
        const newExperience = {...initialState.listOfExperiences[0], id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6)}
        state.listOfExperiences = [...state.listOfExperiences, newExperience]
    },
  }
});

export const { setExpTitle, setEmployeer, setPosition, setExpFromUntil, setExpDescription, addExperience } = experience.actions;

export default experience.reducer;
