import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { RouterList } from "./routes/RouterList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterList />
  </React.StrictMode>
);
