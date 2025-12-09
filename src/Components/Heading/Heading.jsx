import Home from "../Home/Home";
import About from "../About/About";
import Protfolio from "../Protfolio/Protfolio";
import Contact from "../Contact/Contact";
import { useState } from "react";

export default function Heading({ page }) {
  const [heading, setheading] = useState({
    home: "Start Framework",
    about: "About Component",
    portfolio: "Portfolio Component",
    contact: "Contact Section",
  });

  function renderPage() {
    switch (page) {
      case "home":
        return <Home test={heading.home} />;
      case "about":
        return <About test={heading.about} />;
      case "portfolio":
        return <Protfolio test={heading.portfolio} />;
      case "contact":
        return <Contact test={heading.contact} />;
      default:
        return <h1>Not Found</h1>;
    }
  }

  return <>{renderPage()}</>;
}
