import { createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../constants.js";
import axios from "axios";
const candidateSlice = createSlice({
  name: "candidate",
  initialState: {
    loading: false,
    candidate: null,
    rounds: [
      {
        id: 1,
        title: "Aptitude Round",
        status: "active",
        duration: 20,
      },
      {
        id: 2,
        title: "Role Specific Round",
        status: "locked",
        duration: 20,
      },
      {
        id: 3,
        title: "DSA Round",
        status: "locked",
        duration: 20,
      },
    ],
    error: null,
    creating: false,
    updating: false,
    message: null,
  },
  reducers: {
    registerRequest(state) {
      state.creating = true;
      state.candidate = null;
      state.message = null;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.creating = false;
      state.candidate = action.payload.candidate;
      state.message = action.payload.message;
      state.error = null;
    },
    registerFailed(state, action) {
      state.creating = false;
      state.candidate = null;
      state.message = null;
      state.error = action.payload;
    },
    loadCandidateRequest(state) {
      state.loading = true;
      state.candidate = state.candidate;
      state.message = null;
      state.error = null;
    },
    loadCandidateSuccess(state, action) {
      state.loading = false;
      state.candidate = action.payload;
      state.message = null;
      state.error = null;
    },
    loadCandidateFailed(state, action) {
      state.loading = false;
      state.candidate = state.candidate;
      state.message = null;
      state.error = action.payload;
    },
    updateCandidateRequest(state) {
      state.updating = true;
      state.candidate = state.candidate;
      state.message = null;
      state.error = null;
    },
    updateCandidateSuccess(state, action) {
      state.updating = false;
      state.candidate = action.payload;
      state.message = null;
      state.error = null;
    },
    updateCandidateFailed(state, action) {
      state.updating = false;
      state.candidate = state.candidate;
      state.message = null;
      state.error = action.payload;
    },
    clearAllErrors(state) {
      state.error = null;
    },
    clearAllMessages(state) {
      state.message = null;
    },
  },
});

export const register = (candidate) => {
  return async (dispatch) => {
    dispatch(candidateSlice.actions.registerRequest());

    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/candidates/register`,
        { ...candidate },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("User Register :", data);
      dispatch(candidateSlice.actions.registerSuccess({ candidate, message: data.message }));
      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      console.error("Register Error:", error);
      dispatch(candidateSlice.actions.registerFailed(error.message));
    }
  };
};

export const getCandidate = () => {
  return async (dispatch) => {
    dispatch(candidateSlice.actions.loadCandidateRequest());
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/candidates/get`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Get Candidate", data);

      dispatch(candidateSlice.actions.loadCandidateSuccess(data.candidate));
      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(candidateSlice.actions.loadCandidateFailed(error.message));
    }
  };
};
export const updateCandidate = (candidate) => {
  return async (dispatch, getState) => {
    dispatch(candidateSlice.actions.updateCandidateRequest());
    try {
      const { data } = await axios.put(
        `${BACKEND_URL}/candidates/update_candidate`,
        { ...candidate },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Update Candidate", data);

      dispatch(candidateSlice.actions.updateCandidateSuccess({ candidate: { ...getState().candidate.candidate, ...candidate }, message: data.message }));
      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(candidateSlice.actions.updateCandidateFailed(error.message));
    }
  };
};
export const candidateAction = candidateSlice.actions;
export default candidateSlice.reducer;
