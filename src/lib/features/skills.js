'use client';

import { createSlice } from "@reduxjs/toolkit";
import { reconstructData } from "../helper";

const initialState = {
  title: '',
  listOfSkills: [
    { id: '0000', title: '' },
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
        state.listOfSkills = [...state.listOfSkills, {title: '', id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6)}]
    },
    addMultiSkills(state, action) {
      const filter = state.listOfSkills.filter(({title}) => title.length > 0) || []
      state.listOfSkills = [...filter, ...action.payload]
    },
    removeSkill(state, action) {
      state.listOfSkills = state.listOfSkills.filter(({id}) => action.payload != id)
    }
  }
});

export const { setSkillTitle, setSkill, addSkill, addMultiSkills, removeSkill } = skills.actions;

export default skills.reducer;
