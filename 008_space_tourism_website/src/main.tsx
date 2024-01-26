import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root.tsx";
import Error from "./routes/Error.tsx";
import Home from "./routes/Home.tsx";
import Technology from "./routes/Technology.tsx";
import Destination from "./routes/Destination.tsx";
import Crew from "./routes/Crew.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error root={true} />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "destination", element: <Destination /> },
      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
