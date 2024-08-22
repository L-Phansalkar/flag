import { configureStore } from "@reduxjs/toolkit"
import flagsReducer from './flags'

const store = configureStore({
  reducer:{
    flags:flagsReducer
  },
})

export default store

export * from './flags'
