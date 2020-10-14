import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
// import sessionStorage from 'redux-persist/lib/storage/session'

import ThemeReducer from 'Components/Theme/themeSlice'
import CounterReducer from 'Components/Counter/counterSlice'

// persist reducers
export const localStorageReducers = persistReducer(
  {
    key: 'localStorage',
    storage: localStorage,
  },
  combineReducers({
    theme: ThemeReducer,
  })
)

// export const sessionStorageReducers = persistReducer(
//   {
//     key: 'sessionStorage',
//     storage: sessionStorage,
//   },
//   combineReducers({})
// )

const rootReducer = combineReducers({
  localStorage: localStorageReducers,
  counter: CounterReducer,
})

export default rootReducer
