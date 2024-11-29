import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import navigationReducer from './navigationSlice'
import languageReducer from './languageSlice'

// Load state from localStorage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('portfolio-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

// Save state to localStorage
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('portfolio-state', serializedState)
  } catch (err) {
    // Ignore write errors
  }
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    navigation: navigationReducer,
    language: languageReducer,
  },
  preloadedState: loadState()
})

store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

