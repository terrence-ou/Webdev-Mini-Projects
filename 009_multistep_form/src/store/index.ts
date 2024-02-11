import { configureStore } from "@reduxjs/toolkit";

import subscriptionFormReducer from "./subForm";

const store = configureStore({
  reducer: { subscriptionFormReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
