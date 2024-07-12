import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SmoothScroll from "./components/SmoothScroll.jsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </SmoothScroll>
  </React.StrictMode>
);
