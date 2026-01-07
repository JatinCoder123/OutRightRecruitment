import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./slices/candidate.js";
import jobRoleReducer from "./slices/jobRole.js";
import questionsReducer from "./slices/questions.js";
export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    jobRoles: jobRoleReducer,
    questions: questionsReducer,
  },
});
