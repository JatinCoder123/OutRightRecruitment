import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    aptiLoading: false,
    dsaLoading: false,
    roleBasedLoading: false,
    dsaQuestions: [],
    aptiQuestions: [],
    roleBasedQuestions: [],
    aptiError: null,
    dsaError: null,
    roleBasedError: null,
  },
  reducers: {
    getAptiQuestionRequest(state) {
      state.aptiQuestions = [];
      state.aptiError = null;
      state.aptiLoading = true;
    },
    getAptiQuestionSuccess(state, action) {
      state.aptiQuestions = action.payload;
      state.aptiError = null;
      state.aptiLoading = false;
    },
    getAptiQuestionFailed(state, action) {
      state.aptiQuestions = state.aptiQuestions;
      state.aptiError = action.payload;
      state.aptiLoading = false;
    },
    getDSAQuestionRequest(state) {
      state.dsaQuestions = [];
      state.dsaError = null;
      state.dsaLoading = true;
    },
    getDSAQuestionSuccess(state, action) {
      state.dsaQuestions = action.payload;
      state.dsaError = null;
      state.dsaLoading = false;
    },
    getDSAQuestionFailed(state, action) {
      state.dsaQuestions = state.dsaQuestions;
      state.dsaError = action.payload;
      state.dsaLoading = false;
    },
    getRoleBasedQuestionRequest(state) {
      state.roleBasedQuestions = [];
      state.roleBasedError = null;
      state.roleBasedLoading = true;
    },
    getRoleBasedQuestionSuccess(state, action) {
      state.roleBasedQuestions = action.payload;
      state.roleBasedError = null;
      state.roleBasedLoading = false;
    },
    getRoleBasedQuestionFailed(state, action) {
      state.roleBasedQuestions = state.roleBasedQuestions;
      state.roleBasedError = action.payload;
      state.roleBasedLoading = false;
    },
    clearAptiErrors(state) {
      state.aptiError = null;
    },
    clearDsaErrors(state) {
      state.dsaError = null;
    },
    clearRoleBasedErrors(state) {
      state.roleBasedError = null;
    },
  },
});

export const getAptiQuestion = (roleId) => {
  return async (dispatch) => {
    dispatch(questionsSlice.actions.getAptiQuestionRequest());
    console.log("Getting Apti Question with roleId", roleId);
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/questions.php?roleId=${roleId}&type=aptitude&count=20`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("AptiQUestion", data);

      dispatch(
        questionsSlice.actions.getAptiQuestionSuccess(data.questions.questions)
      );

      dispatch(questionsSlice.actions.clearAptiErrors());
    } catch (error) {
      dispatch(questionsSlice.actions.getAptiQuestionFailed(error.message));
    }
  };
};
export const getDSAQuestion = (roleId) => {
  return async (dispatch) => {
    dispatch(questionsSlice.actions.getDSAQuestionRequest());
    console.log("Gettin DSA qeustion with roleId", roleId);
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/questions.php?roleId=${roleId}&type=dsa&count=10`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("DSA QUESTION", data);
      dispatch(
        questionsSlice.actions.getDSAQuestionSuccess(data.questions.questions)
      );

      dispatch(questionsSlice.actions.clearDsaErrors());
    } catch (error) {
      dispatch(questionsSlice.actions.getDSAQuestionFailed(error.message));
    }
  };
};
export const getRoleBasedQuestion = (candidateId, roleId) => {
  return async (dispatch) => {
    dispatch(questionsSlice.actions.getRoleBasedQuestionRequest());
    console.log(
      `Gettin role based question of role id ${roleId} for candidate ${candidateId}`
    );
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/questions.php?roleId=${roleId}&type=role_based&candidateId=${candidateId}&count=30`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("rolebased question", data);

      dispatch(
        questionsSlice.actions.getRoleBasedQuestionSuccess(
          data.questions.questions
        )
      );

      dispatch(questionsSlice.actions.clearRoleBasedErrors());
    } catch (error) {
      dispatch(
        questionsSlice.actions.getRoleBasedQuestionFailed(error.message)
      );
    }
  };
};
export const questionsAction = questionsSlice.actions;
export default questionsSlice.reducer;
