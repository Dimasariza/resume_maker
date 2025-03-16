'use client'

import { configureStore } from '@reduxjs/toolkit'
import SwitchLayout from './features/switchLayout'

export const makeStore = () => {
  return configureStore({
    reducer: {
        SwitchLayout
    }
  })
}