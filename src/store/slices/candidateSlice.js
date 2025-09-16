import { createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../constants.js";
import axios from "axios";
const candidateSlice = createSlice({
  name: "candidate",
  initialState: {
    loading: false,
    candidate: {},
    skills: [],
    languages: [],
    isRegister: false,
    isLanguageSelected: false,
    // isTestStarted: false,
    error: null,
    message: null,
  },
  reducers: {
    registerRequest(state) {
      state.loading = true;
      state.candidate = {};
      state.isRegister = false;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.candidate = action.payload;
      state.isRegister = true;
      state.error = null;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.isRegister = false;
      state.candidate = {};
      state.error = action.payload;
    },
    loadCandidateRequest(state) {
      state.loading = true;
      state.isRegister = false;
      state.candidate = state.candidate;
      state.error = null;
    },
    loadCandidateSuccess(state, action) {
      state.loading = false;
      state.isRegister = true;
      state.candidate = action.payload;
      state.error = null;
    },
    loadCandidateFailed(state, action) {
      state.loading = false;
      state.isRegister = false;
      state.candidate = state.candidate;
      state.error = action.payload;
    },
    getLanguagesRequest(state) {
      state.languages = [];
      state.error = null;
      state.loading = true;
    },
    getLanguagesSuccess(state, action) {
      state.languages = action.payload;
      state.error = null;
      state.loading = false;
    },
    getLanguagesFailed(state, action) {
      state.languages = state.roles;
      state.error = action.payload;
      state.loading = false;
    },
    addCandidateSkillsRequest(state) {
      state.isLanguageSelected = false;
      state.error = null;
      state.loading = true;
    },
    addCandidateSkillsSuccess(state, action) {
      state.isLanguageSelected = action.payload;
      state.error = null;
      state.loading = false;
    },
    addCandidateSkillsFailed(state, action) {
      state.isLanguageSelected = false;
      state.error = action.payload;
      state.loading = false;
    },
    getCandidateSkillsRequest(state) {
      state.skills = [];
      state.isLanguageSelected = false;
      state.error = null;
      state.loading = true;
    },
    getCandidateSkillsSuccess(state, action) {
      state.skills = action.payload;
      state.isLanguageSelected = true;
      state.error = null;
      state.loading = false;
    },
    getCandidateSkillsSuccessButNoSkill(state, action) {
      state.skills = action.payload;
      state.isLanguageSelected = false;
      state.error = null;
      state.loading = false;
    },
    getCandidateSkillsFailed(state, action) {
      state.skills = state.skills;
      state.isLanguageSelected = false;
      state.error = action.payload;
      state.loading = false;
    },

    clearAllErrors(state) {
      state.error = null;
      state.candidate = state.candidate;
      state.skills = state.skills;
      state.languages = state.languages;
    },
    clearAllMessages(state) {
      state.error = null;
      state.message = null;
      state.candidate = state.candidate;
      state.skills = state.skills;
      state.languages = state.languages;
    },
  },
});

export const register = (first_name, last_name = null, email, role_id) => {
  return async (dispatch) => {
    dispatch(candidateSlice.actions.registerRequest());

    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/Candidate.php?endpoint=addCandidate`,
        { first_name, last_name, email, role_id },
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
export const getJobRoleLanguage = (role_id) => {
  return async (dispatch) => {
    console.log("Getting Job Roles Language with role id", role_id);
    dispatch(candidateSlice.actions.getLanguagesRequest());
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/role_skill.php?endpoint=listByRole&role_id=${role_id}`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Job Role Language", data);
      dispatch(candidateSlice.actions.getLanguagesSuccess(data));
      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(candidateSlice.actions.getLanguagesFailed(error.message));
    }
  };
};
export const addCandidateSkills = (candidate_id, skill_ids = []) => {
  return async (dispatch) => {
    dispatch(candidateSlice.actions.addCandidateSkillsRequest());
    console.log("Adding Skills to Candidate id", candidate_id);
    console.log("SKILLS", skill_ids);
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/candidate_skill.php?endpoint=addSkills`,
        { candidate_id, skill_ids },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Language added", data);

      dispatch(candidateSlice.actions.addCandidateSkillsSuccess(data.success));
      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      console.error("addCandidateSkills Error:", error);
      dispatch(candidateSlice.actions.addCandidateSkillsFailed(error.message));
    }
  };
};
export const getCandidateSkills = (id) => {
  return async (dispatch) => {
    console.log("Gettign Candidate Skills with id", id);
    dispatch(candidateSlice.actions.getCandidateSkillsRequest());
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/candidate_skill.php?endpoint=listSkills&candidate_id=${id}`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Candidate skill", data);
      if (data && data.length > 0) {
        dispatch(candidateSlice.actions.getCandidateSkillsSuccess(data));
      } else {
        dispatch(
          candidateSlice.actions.getCandidateSkillsSuccessButNoSkill([])
        );
      }

      dispatch(candidateSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(candidateSlice.actions.getCandidateSkillsFailed(error.message));
    }
  };
};
export const candidateAction = candidateSlice.actions;
export default candidateSlice.reducer;
