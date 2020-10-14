import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import rootReducer from './reducers'

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
})
export const store = configureStore({
  reducer: rootReducer,
  middleware,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
