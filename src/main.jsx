import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./component/Login.jsx";
import Signup from "./component/Signup.jsx";
import Profile from "./component/Profile.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
