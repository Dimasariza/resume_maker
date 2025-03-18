'use client'

import { configureStore } from '@reduxjs/toolkit'
import SwitchLayout from './features/switchLayout'
import SwitchColor from './features/switchColor'
import SwitchTypography from './features/switchTypography'
import PersonalIdentity from './features/personalIdentity'
import PersonalSummary from './features/personalSummary'
import PersonalDetails from './features/personalDetails'
import Experience from './features/experience'
import Educations from './features/education'
import Skills from './features/skills'
import SwitchSection from './features/switchSection'
import Languages from './features/languages'
import Hobbies from './features/hobbies'

export const makeStore = () => {
  return configureStore({
    reducer: {
        SwitchLayout,
        SwitchColor,
        SwitchTypography,
        SwitchSection,
        PersonalIdentity,
        PersonalSummary,
        PersonalDetails,
        Experience,
        Educations,
        Skills,
        Languages,
        Hobbies
    }
  })
}