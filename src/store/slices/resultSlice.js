import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
const resultSlice = createSlice({
  name: "result",
  initialState: {
    loading: false,
    dsaTestComplete: false,
    aptiTestComplete: false,
    roleTestComplete: false,
    error: null,
    message: null,
  },
  reducers: {
    submitAptiResultRequest(state) {
      state.aptiTestComplete = false;
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    submitAptiResultSuccess(state, action) {
      state.aptiTestComplete = true;
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    submitAptiResultFailed(state, action) {
      state.aptiTestComplete = state.aptiTestComplete;
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },

    submitRoleBasedResultRequest(state) {
      state.roleTestComplete = false;
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    submitRoleBasedResultSuccess(state, action) {
      state.roleTestComplete = true;
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    submitRoleBasedResultFailed(state, action) {
      state.roleTestComplete = state.roleTestComplete;
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },

    submitDSAAnswersRequest(state) {
      state.dsaTestComplete = false;
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    submitDSAAnswersSuccess(state, action) {
      state.dsaTestComplete = true;
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    submitDSAAnswersFailed(state, action) {
      state.dsaTestComplete = state.roleTestComplete;
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },

    clearAllError(state) {
      state.error = null;
    },
    addSubmissionError(state, action) {
      state.error = action.payload;
    },
    checkAptiSubmissionSuccess(state, action) {
      state.aptiTestComplete = action.payload;
    },
    checkDSASubmissionSuccess(state, action) {
      state.dsaTestComplete = action.payload;
    },
    checkRoleSubmissionSuccess(state, action) {
      state.roleTestComplete = action.payload;
    },

    clearMessage(state) {
      state.message = null;
    },
  },
});

export const submitAptiResult = (candidate_id, apti_result) => {
  return async (dispatch) => {
    dispatch(resultSlice.actions.submitAptiResultRequest());
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/result.php?endpoint=submit_apti_result`,
        { candidate_id, apti_result },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(data);

      dispatch(resultSlice.actions.submitAptiResultSuccess(data.message));

      dispatch(resultSlice.actions.clearAllError());
    } catch (error) {
      dispatch(resultSlice.actions.submitAptiResultFailed(error.message));
    }
  };
};
export const checkSubmission = (candidate_id, result) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/result.php?endpoint=check_submission`,
        { candidate_id, result },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (result == "apti_result") {
        console.log("Is apti submit ", data.isSubmit);
        dispatch(resultSlice.actions.checkAptiSubmissionSuccess(data.isSubmit));
      } else if (result == "role_result") {
        console.log("Is role submit ", data.isSubmit);
        dispatch(resultSlice.actions.checkRoleSubmissionSuccess(data.isSubmit));
      } else {
        console.log("Is dsa submit ", data.isSubmit);
        dispatch(resultSlice.actions.checkDSASubmissionSuccess(data.isSubmit));
      }
      dispatch(resultSlice.actions.clearAllError());
    } catch (error) {
      dispatch(resultSlice.actions.addSubmissionError(error.message));
    }
  };
};
export const submitDSAAnswers = (candidate_id, code_storage) => {
  return async (dispatch) => {
    console.log("Candidate Id in dsa", candidate_id);
    console.log("Code Storage", code_storage);
    dispatch(resultSlice.actions.submitDSAAnswersRequest());
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/result.php?endpoint=submit_dsa_answers`,
        { candidate_id, code_storage },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(data);
      dispatch(resultSlice.actions.submitDSAAnswersSuccess(data.message));

      dispatch(resultSlice.actions.clearAllError());
    } catch (error) {
      dispatch(resultSlice.actions.submitDSAAnswersFailed(error.message));
    }
  };
};
export const submitRoleResult = (candidate_id, role_result) => {
  return async (dispatch) => {
    dispatch(resultSlice.actions.submitRoleBasedResultRequest());
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/result.php?endpoint=submit_role_based_result`,
        { candidate_id, role_result },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(data);
      dispatch(resultSlice.actions.submitRoleBasedResultSuccess(data.message));

      dispatch(resultSlice.actions.clearAllError());
    } catch (error) {
      dispatch(resultSlice.actions.submitRoleBasedResultFailed(error.message));
    }
  };
};

export const resultActions = resultSlice.actions;
export default resultSlice.reducer;
