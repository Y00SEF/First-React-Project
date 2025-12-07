/*
Hooks --> (use)
1- save data on my component
2- action after render (after display)
3- conect our componenet to events js 
4- help us to see component live cycle



frist hooks --> userstate
1- must do import usestate

 
Just ForKnowladge
===> function useState(argg) {
    let Age = argg;

    function setAge(update) {
      Age = update;
    }
    return [Age,setAge]
  }
  --------------------------------------
  Binding ==> {Expression Js Code (Mean Code Js return me anything but not finction darictly)}

  
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
