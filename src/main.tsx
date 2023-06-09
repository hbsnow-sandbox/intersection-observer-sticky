import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import { Example1 } from "./pages/example-01";
import { Example2 } from "./pages/example-02";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: null },
        { path: "/example-01", element: <Example1 /> },
        { path: "/example-02", element: <Example2 /> },
      ],
    },
  ],
  { basename: "/intersection-observer-sticky/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
