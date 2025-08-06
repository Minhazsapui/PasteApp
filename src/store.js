import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from "paste-app\\src\\redux\\pasteSlice.js"

export const store = configureStore({
  reducer:{
      paste: pasteReducer
  }
})