'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfEducations: [
    { 
      id: '0000',
      school: '',
      degree: '',
      fromUntil: '',
    }
  ]
};

export const educations = createSlice({ 
  name: 'education',
  initialState,
  reducers: {
    setEduTitle(state, action) {
        state.title = action.payload;    
    },
    setSchool(state, action) {
        state.listOfEducations = reconstructData(state.listOfEducations, action, "school") 
    },
    setDegree(state, action) {
        state.listOfEducations = reconstructData(state.listOfEducations, action, "degree") 
    },
    setEduFromUntil(state, action) {
        state.listOfEducations = reconstructData(state.listOfEducations, action, "fromUntil") 
    },
    addEducation(state, action) {
        const newEducation = {...initialState.listOfEducations[0], 
          id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6)
        }
        state.listOfEducations = [...state.listOfEducations, newEducation]
    },
  }
});

export const { setEduTitle, setSchool, setDegree, setEduFromUntil, addEducation } = educations.actions;

export default educations.reducer;
