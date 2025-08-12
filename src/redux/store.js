import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reportReducer from './slices/reportsSlice'

const rootReducer = combineReducers({
  reports: reportReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
