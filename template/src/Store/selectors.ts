import { Selector } from '@reduxjs/toolkit'
import { RootState } from 'Store'

import { ThemeState } from 'Components/Theme/themeSlice'

export type SelectorType<R> = Selector<RootState, R>

export const themeSelector: SelectorType<ThemeState> = (state) =>
  state.localStorage.theme
export const selectCount: SelectorType<number> = (state) => state.counter.value
