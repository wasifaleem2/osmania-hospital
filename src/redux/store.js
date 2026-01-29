import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reportReducer from './slices/reportsSlice'
import dataReducer from './slices/allDataSlice'

const rootReducer = combineReducers({
  reports: reportReducer,
  alldata: dataReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
