import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./slices/candidateSlice.js";
import jobRoleReducer from "./slices/jobRoleSlice.js";
import questionsReducer from "./slices/questionsSlice.js";
import resultReducer from "./slices/resultSlice.js";
export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    jobRoles: jobRoleReducer,
    questions: questionsReducer,
    result: resultReducer,
  },
});
