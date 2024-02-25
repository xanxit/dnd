import { combineReducers } from "@reduxjs/toolkit";
import listsReducer from "./listsReducer";

export default combineReducers({
  lists: listsReducer
})