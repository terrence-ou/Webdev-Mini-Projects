import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import Root from "./routes/Root";
import PersonalInfo from "./routes/PersonalInfo";
import SelectPlan from "./routes/SelectPlan";
import Addon from "./routes/Addon";
import Summary from "./routes/Summary";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
