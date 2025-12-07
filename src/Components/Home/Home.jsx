import React, { useEffect, useState } from "react";

export default function Home() {
  // To Write Title page

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    // Home Page Tags
    <div className="container-fluid ww cc bg-success p-5 gap-5 d-flex flex-column justify-content-center align-items-center">
      <img
        src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
        alt=""
        className="w-25"
      />
      <div>
        <h1 className="text-center text-white fw-bold ">Start Framework</h1>

        <div className="d-flex justify-content-center align-items-center gap-4">
          <div className="line"></div>

          <i className="fa-solid fa-star text-white"></i>
          <div className="line"></div>
        </div>
        <p className="text-center text-white mt-3">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}
