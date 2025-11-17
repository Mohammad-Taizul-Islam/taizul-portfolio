
import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { ThemeState } from './themeSlice'
import navigationReducer from './navigationSlice'
import languageReducer from './languageSlice'

interface StoredState {
  theme: ThemeState;
  navigation: ReturnType<typeof navigationReducer>;
  language: ReturnType<typeof languageReducer>;
}

// Load state from localStorage if available
const loadState = (): StoredState | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  try {
    const serializedState = localStorage.getItem('portfolio-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState) as StoredState
  } catch (err) {
    console.error('Failed to load state:', err)
    return undefined
  }
}

// Save state to localStorage
const saveState = (state: RootState) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('portfolio-state', serializedState)
  } catch (err) {
    console.error('Failed to save state:', err)
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
// 
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { configureStore } from '@reduxjs/toolkit'
// import themeReducer from './themeSlice'
// import navigationReducer from './navigationSlice'
// import languageReducer from './languageSlice'

// // Load state from localStorage if available
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('portfolio-state')
//     if (serializedState === null) {
//       return undefined
//     }
//     return JSON.parse(serializedState)
//   } catch (err) {
//     return undefined
//   }
// }

// // Save state to localStorage
// const saveState = (state: RootState) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('portfolio-state', serializedState)
//   } catch (err) {
//     // Ignore write errors
//   }
// }

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     navigation: navigationReducer,
//     language: languageReducer,
//   },
//   preloadedState: loadState()
// })

// store.subscribe(() => {
//   saveState(store.getState())
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


// import { configureStore } from '@reduxjs/toolkit'
// import themeReducer from './themeSlice'
// import navigationReducer from './navigationSlice'
// import languageReducer from './languageSlice'
// import { RootState } from './types'

// // Load state from localStorage if available
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('portfolio-state')
//     if (serializedState === null) {
//       return undefined
//     }
//     return JSON.parse(serializedState)
//   } catch {
//     return undefined
//   }
// }

// // Save state to localStorage
// const saveState = (state: RootState) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('portfolio-state', serializedState)
//   } catch {
//     // Ignore write errors
//   }
// }

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     navigation: navigationReducer,
//     language: languageReducer,
//   },
//   preloadedState: loadState()
// })

// store.subscribe(() => {
//   saveState(store.getState())
// })

// export type AppDispatch = typeof store.dispatch

