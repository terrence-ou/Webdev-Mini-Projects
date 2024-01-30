import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import Root from "./routes/Root.tsx";
import Error from "./routes/Error.tsx";
import Home from "./routes/Home.tsx";
import Technology from "./routes/Technology.tsx";
import Destination from "./routes/Destination.tsx";
import DestinationIntro from "./components/DestinationIntro.tsx";
import Crew from "./routes/Crew.tsx";

import "./index.css";
import CrewIntro from "./components/CrewIntro.tsx";
import TechnologyIntro from "./components/TechnologyIntro.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error root={true} />,
    children: [
      {
        errorElement: <Error root={false} />,
        children: [
          { index: true, element: <Navigate to="home" /> },
          { path: "home", element: <Home /> },
          {
            path: "destination",
            element: <Destination />,
            children: [
              { index: true, element: <Navigate to="moon" /> },
              {
                path: ":destinationId",
                element: <DestinationIntro />,
              },
            ],
          },
          {
            path: "crew",
            element: <Crew />,
            children: [
              { index: true, element: <Navigate to="douglas" /> },
              { path: ":crewId", element: <CrewIntro /> },
            ],
          },
          {
            path: "technology",
            element: <Technology />,
            children: [
              { index: true, element: <Navigate to="launch-vehicle" /> },
              { path: ":techId", element: <TechnologyIntro /> },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
