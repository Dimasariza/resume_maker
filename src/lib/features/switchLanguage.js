'use client';

import { createSlice } from "@reduxjs/toolkit";

export const locales = ['en', 'fr'];
export const defaultLocale = 'en';

const languages = [
    { lang: "English", id: 'en' }, 
    { lang: "Español", id: 'es' }, 
    { lang: "Français", id: 'fr' }, 
    { lang: "Deutsch", id: 'de' }, 
    { lang: "Italiano", id: 'it' }, 
    { lang: "Nederlands", id: 'nl' }, 
    { lang: "Svenska", id: 'sv' }, 
    { lang: "Dansk", id: 'da' }, 
    { lang: "Norsk", id: 'no' }, 
    { lang: "Português", id: 'pt' }, 
    { lang: "Polski", id: 'pl' }
]

const initialState = {
  locale: defaultLocale,
};

export const switchLanguage = createSlice({ 
  name: 'switcLanguage',
  initialState,
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;    
    },
  }
});

export const { setLocale } = switchLanguage.actions;

export default switchLanguage.reducer;
