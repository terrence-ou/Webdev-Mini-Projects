import { createSlice } from "@reduxjs/toolkit";
import initFiles from "../data/data.json";

const PROJECT_KEY: string = "markdown-editor";

// Defining Types used in this reducer
export type File = {
  createdAt: string;
  name: string;
  content: string;
};

type mardownData = {
  currFile: string;
  files: File[];
};

const setLocalStorage = (files: File[]) => {
  localStorage.setItem(PROJECT_KEY, JSON.stringify(files));
};

// Initialize the file in localstorage
if (localStorage.getItem(PROJECT_KEY) === null) {
  setLocalStorage(initFiles);
}

const initData: File[] = JSON.parse(localStorage.getItem(PROJECT_KEY) || "{}");
const initialState: mardownData = {
  currFile: initData[initData.length - 1].name,
  files: initData,
};

// Creating a new file with a default file name
const createNewFile = (state: mardownData) => {
  const date: string = new Date().toISOString();
  const prefix: string = "untitled";
  let suffix: number = 0;
  let newName: string = prefix + "-" + suffix + ".md";
  while (state.files.some((file: File) => file.name === newName)) {
    suffix++;
    newName = prefix + "-" + suffix + ".md";
  }
  const newFile: File = { createdAt: date, name: newName, content: "" };
  state.files = [...state.files, newFile];
  setLocalStorage(state.files);
};

/* THE BODY OF THE SLICE */
const markdownDataSlice = createSlice({
  name: "markdownDataStates",
  initialState,
  reducers: {
    // Setting current filename
    setCurrFile(state, action) {
      state.currFile = action.payload;
    },
    // Saving file
    saveFile(state, action) {
      const currIdx: number = state.files.findIndex(
        (file) => file.name === state.currFile,
      );
      state.files[currIdx].content = action.payload;
      localStorage.setItem(PROJECT_KEY, JSON.stringify(state.files));
    },
    // Creating a new file
    createFile(state) {
      createNewFile(state);
    },
    // Changing current file's filename
    changeFilename(state, action) {
      const currIdx: number = state.files.findIndex(
        (file) => file.name === state.currFile,
      );
      state.files[currIdx].name = action.payload;
      state.currFile = action.payload;
      setLocalStorage(state.files);
    },
    // Deleting the current file
    deleteFile(state) {
      const newFiles: File[] = state.files.filter(
        (file) => file.name != state.currFile,
      );
      state.files = newFiles;
      if (newFiles.length === 0) {
        createNewFile(state);
      }
      state.currFile = state.files[state.files.length - 1].name;
      setLocalStorage(state.files);
    },
  },
});

export const markdownDataActions = markdownDataSlice.actions;
export default markdownDataSlice.reducer;
