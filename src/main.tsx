import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ImageSliderProvider from "./context/ImageSliderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImageSliderProvider>
      <App />
    </ImageSliderProvider>
  </StrictMode>
);
