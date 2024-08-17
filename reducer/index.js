import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slice/authslice"


const rootReducer = combineReducers({
  auth: authReducer,

})

export default rootReducer
