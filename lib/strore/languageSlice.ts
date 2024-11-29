import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
  currentLanguage: 'en' | 'es' | 'fr'
}

const initialState: LanguageState = {
  currentLanguage: 'en'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageState['currentLanguage']>) => {
      state.currentLanguage = action.payload
    }
  }
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer

