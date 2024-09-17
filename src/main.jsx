import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/css/font-awesome.min.css";
import "./assets/css/icofonts.css";
import "./assets/css/automobil_icon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes/routes.jsx";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

//
import "swiper/css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
