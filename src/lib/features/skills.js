'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfSkills: [
    { id: '0', title: '' },
    // { id: '1', title: '2' },
    // { id: '2', title: '3' },
  ]
};

export const skills = createSlice({ 
  name: 'skills',
  initialState,
  reducers: {
    setSkillTitle(state, action) {
        state.title = action.payload;    
    },
    setSkill(state, action) {
        state.listOfSkills = reconstructData(state.listOfSkills, action, "title") 
    },
    addSkill(state, action) {
        state.listOfSkills = [...state.listOfSkills, {title: '', id: state.listOfSkills.length.toString()}]
    },
    removeSkill() {

    }
  }
});

export const { setSkillTitle, setSkill, addSkill } = skills.actions;

export default skills.reducer;
