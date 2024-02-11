import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Root from "./routes/Root";
import PersonalInfo from "./routes/PersonalInfo";
import SelectPlan from "./routes/SelectPlan";
import Addon from "./routes/Addon";
import Summary from "./routes/Summary";
import Completed from "./routes/Completed";

import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Navigate to="your-info" /> },
      {
        path: "your-info",
        element: <PersonalInfo />,
      },
      {
        path: "select-plan",
        element: <SelectPlan />,
      },
      {
        path: "add-ons",
        element: <Addon />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "completed",
        element: <Completed />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
