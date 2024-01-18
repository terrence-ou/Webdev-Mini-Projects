import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light";

type Interface = {
  sidebarOn: boolean;
  previewOn: boolean;
  theme: ThemeType;
};

const INIT_THEME: ThemeType = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const initialState: Interface = {
  previewOn: true,
  sidebarOn: true,
  theme: INIT_THEME,
};

const interfaceSlice = createSlice({
  name: "interfaceStates",
  initialState,
  reducers: {
    switchSideBar(state) {
      state.sidebarOn = !state.sidebarOn;
    },
    switchTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    switchPreview(state) {
      state.previewOn = !state.previewOn;
    },
  },
});

export const interfaceActions = interfaceSlice.actions;
export default interfaceSlice.reducer;
