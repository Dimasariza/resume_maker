'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfEducations: [
    { 
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
        state.listOfEducations = [...state.listOfEducations, initialState.listOfEducations[0]]
    },
  }
});

export const { setEduTitle, setSchool, setDegree, setEduFromUntil, addEducation } = educations.actions;

export default educations.reducer;
