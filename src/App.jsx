import { useState } from "react";

import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import About from "./Components/About/About.jsx";
import Protfolio from "./Components/Protfolio/Protfolio.jsx";

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: "About", element: <About /> },
      { path: "Protfolio", element: <Protfolio /> },
      { path: "Contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
