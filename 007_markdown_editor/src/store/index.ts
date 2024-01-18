import { configureStore } from "@reduxjs/toolkit";

import intefaceReducer from "./interface";
import markdownDataReducer from "./markdownData";

const store = configureStore({
  reducer: { interface: intefaceReducer, data: markdownDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
