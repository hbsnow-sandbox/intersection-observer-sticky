import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import Example1 from "./pages/example-01";
import Example2 from "./pages/example-02";
import Example3 from "./pages/example-03";
import Example4 from "./pages/example-04";
import Example5 from "./pages/example-05";

import "./main.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: null },
      { path: "/example-01", element: <Example1 /> },
      { path: "/example-02", element: <Example2 /> },
      { path: "/example-03", element: <Example3 /> },
      { path: "/example-04", element: <Example4 /> },
      { path: "/example-05", element: <Example5 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
