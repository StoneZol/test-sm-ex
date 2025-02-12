import { configureStore } from '@reduxjs/toolkit'
import tokensSlice from './slices/tokens-slice'

export const store = configureStore({
  reducer: {
    tokens: tokensSlice,
  },
})