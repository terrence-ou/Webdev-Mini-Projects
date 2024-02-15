import { createSlice } from "@reduxjs/toolkit";

import { subDetailsInitData } from "../data";

const subscriptionFormSlice = createSlice({
  name: "subFormStates",
  initialState: subDetailsInitData,
  reducers: {
    updateUserName(state, action) {
      state.name = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePhone(state, action) {
      state.phone = action.payload;
    },
    updatePlan(state, action) {
      state.plan = action.payload;
    },
    updateSubPeriod(state, action) {
      state.subPeriod = action.payload;
    },
    updateAddons(state, action) {
      state.addons = action.payload;
    },
  },
});

export const subscriptionFormActions = subscriptionFormSlice.actions;
export default subscriptionFormSlice.reducer;
