
import { configureStore } from '@reduxjs/toolkit'

import cakeReducer from './slices/cakeSlice'
import curdReducer from './slices/curdSlice'

export let store = configureStore({
  reducer: {
    cake: cakeReducer,
    curd: curdReducer
  }
})