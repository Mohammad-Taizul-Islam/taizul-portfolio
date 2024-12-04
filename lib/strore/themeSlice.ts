// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface ThemeState {
//   darkMode: boolean
//   gradient: 'purple' | 'blue' | 'green'
// }

// const initialState: ThemeState = {
//   darkMode: true,
//   gradient: 'blue'
// }

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.darkMode = !state.darkMode
//     },
//     setGradient: (state, action: PayloadAction<ThemeState['gradient']>) => {
//       state.gradient = action.payload
//     }
//   }
// })

// export const { toggleTheme, setGradient } = themeSlice.actions
// export default themeSlice.reducer




import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  darkMode: boolean
  gradient: 'purple' | 'blue' | 'green'
}

const initialState: ThemeState = {
  darkMode: true,
  gradient: 'blue'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
    setGradient: (state, action: PayloadAction<ThemeState['gradient']>) => {
      state.gradient = action.payload
    }
  }
})

export const { toggleTheme, setGradient } = themeSlice.actions
export default themeSlice.reducer


