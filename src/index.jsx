import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { RouterList } from "./routes/RouterList";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterList />
    </ThemeProvider>
  </React.StrictMode>
);
