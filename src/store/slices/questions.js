import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    currentQuestions: [],
    questions: [],
    loading: false,
    count: 0,
    message: null,
    error: null,
  },
  reducers: {
    getCurrentQuestionRequest(state) {
      state.currentQuestions = [];
      state.error = null;
      state.loading = true;
    },
    getCurrentQuestionSuccess(state, action) {
      state.currentQuestions = action.payload;
      state.count = action.payload.length;
      state.error = null;
      state.loading = false;
    },
    getCurrentQuestionFailed(state, action) {
      state.currentQuestions = state.currentQuestions;
      state.error = action.payload;
      state.loading = false;
    },
    clearErrors(state) {
      state.error = null;
    },
    clearMessage(state) {
      state.message = null;
    },
    updateQuestion(state, action) {
      state.currentQuestions[action.payload.index] = action.payload.status;
    }
  }
});

export const getCurrentQuestion = () => {
  return async (dispatch) => {
    dispatch(questionsSlice.actions.getCurrentQuestionRequest());
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/questions/get`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Current Question", data);

      dispatch(
        questionsSlice.actions.getCurrentQuestionSuccess(data.questions)
      );

      dispatch(questionsSlice.actions.clearAptiErrors());
    } catch (error) {
      dispatch(questionsSlice.actions.getCurrentQuestionFailed(error.message));
    }
  };
};
export const questionsAction = questionsSlice.actions;
export default questionsSlice.reducer;
