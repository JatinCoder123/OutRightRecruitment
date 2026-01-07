import { createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../constants.js";
import axios from "axios";
const candidateSlice = createSlice({
  name: "candidate",
  initialState: {
    loading: false,
    candidate: {},
    isRegisterd: localStorage.getItem("candidate_id") ? true : false,
    isStarted: localStorage.getItem("is_started") ? true : false,
    error: null,
    message: null,
  },
  reducers: {
    registerRequest(state) {
      state.loading = true;
      state.candidate = {};
      state.isRegisterd = false;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.candidate = action.payload;
      state.isRegisterd = true;
      state.error = null;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.isRegisterd = false;
      state.candidate = {};
      state.error = action.payload;
    },
    loadCandidateRequest(state) {
      state.loading = true;
      state.isRegisterd = false;
      state.candidate = state.candidate;
      state.error = null;
    },
    loadCandidateSuccess(state, action) {
      state.loading = false;
      state.isRegisterd = true;
      state.candidate = action.payload;
      state.error = null;
    },
    loadCandidateFailed(state, action) {
      state.loading = false;
      state.isRegisterd = false;
      state.candidate = state.candidate;
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

export const register = (
  first_name,
  last_name = null,
  email,
  role_id,
  experience
) => {
  return async (dispatch) => {
    dispatch(candidateSlice.actions.registerRequest());

    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/Candidate.php?endpoint=addCandidate`,
        { first_name, last_name, email, role_id, experience },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.candidate && data.candidate.id) {
        console.log("User Register :", data.candidate.id);
        localStorage.setItem("candidate_id", data.candidate.id); // ✅ should work now
        dispatch(candidateSlice.actions.registerSuccess(data.candidate));
      } else {
        throw new Error("Candidate ID missing in response");
      }

      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      console.error("Register Error:", error);
      dispatch(candidateSlice.actions.registerFailed(error.message));
    }
  };
};

export const getCandidate = (id) => {
  return async (dispatch) => {
    console.log("Getting Candidate with id", id);
    dispatch(candidateSlice.actions.loadCandidateRequest());
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/Candidate.php?endpoint=getCandidate&id=${id}`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Get Candidate", data.candidate);

      dispatch(candidateSlice.actions.loadCandidateSuccess(data.candidate));
      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(candidateSlice.actions.loadCandidateFailed(error.message));
    }
  };
};
export const candidateAction = candidateSlice.actions;
export default candidateSlice.reducer;
