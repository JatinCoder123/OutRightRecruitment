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
      state.currentQuestions[action.payload.index] = { ...state.currentQuestions[action.payload.index], ...action.payload.data };
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

      dispatch(questionsSlice.actions.clearErrors());
    } catch (error) {
      dispatch(questionsSlice.actions.getCurrentQuestionFailed(error.message));
    }
  };
};
export const sendAnswer = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/answer/submit`, { round: getState().candidate.current_round, answers: getState().questions.currentQuestions },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.log("FAILED TO STORE ANSWER")
    }
  };
};
export const questionsAction = questionsSlice.actions;
export default questionsSlice.reducer;
