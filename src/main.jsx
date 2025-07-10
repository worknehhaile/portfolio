import ReactDom from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();
ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
