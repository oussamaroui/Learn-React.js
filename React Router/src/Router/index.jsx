import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './style.css' ;
import Home from "./Home";
import Html from "./Html";
import Css from "./Css";
import Js from "./Js";
import Error from "./Error";

const router = createBrowserRouter([
    {path: "/", element: <Home />, errorElement : <Error />},
    {path: "/html", element: <Html />},
    {path: "/css", element: <Css />},
    {path: "/javascript", element: <Js />},
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);