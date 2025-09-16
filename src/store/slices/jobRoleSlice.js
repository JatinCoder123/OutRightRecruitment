import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
const jobRoleSlice = createSlice({
  name: "jobRole",
  initialState: {
    loading: false,
    roles: [],
    error: null,
  },
  reducers: {
    getJobRolesRequest(state) {
      state.roles = [];
      state.error = null;
      state.loading = true;
    },
    getJobRolesSuccess(state, action) {
      state.roles = action.payload;
      state.error = null;
      state.loading = false;
    },
    getJobRolesFailed(state, action) {
      state.roles = state.roles;
      state.error = action.payload;
      state.loading = false;
    },

    clearAllErrors(state) {
      state.error = null;
      state.roles = state.roles;
    },
  },
});

export const getJobRoles = () => {
  return async (dispatch) => {
    dispatch(jobRoleSlice.actions.getJobRolesRequest());
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/JobRole.php?endpoint=listRoles`,
        {
          withCredentials: true,
        }
      );
      console.log("jobRole", data);
      dispatch(jobRoleSlice.actions.getJobRolesSuccess(data));
      dispatch(jobRoleSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(jobRoleSlice.actions.getJobRolesFailed(error.message));
    }
  };
};
export default jobRoleSlice.reducer;
