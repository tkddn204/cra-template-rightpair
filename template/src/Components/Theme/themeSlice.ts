import { createSlice, CaseReducer, SliceCaseReducers } from '@reduxjs/toolkit'

export type ThemeState = 'default' | 'dark'

type SliceName = 'theme'
interface CaseReducers extends SliceCaseReducers<ThemeState> {
  changeThemeMode: CaseReducer<ThemeState>
}

const themeSlice = createSlice<ThemeState, CaseReducers, SliceName>({
  name: 'theme',
  initialState: 'default',
  reducers: {
    changeThemeMode: (state, action): void => {
      state = action.payload
    },
  },
})

export const { changeThemeMode } = themeSlice.actions
export default themeSlice.reducer
