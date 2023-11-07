import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer'
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    app: appReducer
  },
})