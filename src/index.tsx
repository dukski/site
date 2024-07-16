import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { animate, stagger } from "framer-motion/dom"


import App from "./App";
import { Footer } from "./template/Footer";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Footer title="PrinceJot S. Tatter. | Creaturema.de | Projects." 
        
    />
  </StrictMode>
);
