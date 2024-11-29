import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavigationState {
  currentSection: 'home' | 'about' | 'skills' | 'projects' | 'services' | 'testimonials' | 'contact'
  isNavOpen: boolean
}

const initialState: NavigationState = {
  currentSection: 'home',
  isNavOpen: false
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<NavigationState['currentSection']>) => {
      state.currentSection = action.payload
    },
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen
    },
    closeNav: (state) => {
      state.isNavOpen = false
    }
  }
})

export const { setCurrentSection, toggleNav, closeNav } = navigationSlice.actions
export default navigationSlice.reducer

