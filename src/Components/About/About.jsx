import React, { useEffect, useState } from "react";

export default function About({ test }) {

  // To Write Title page

  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    // Abour Page  Tags

    <div className="container-fluid cc ww bg-success p-5 gap-5 d-flex flex-column justify-content-center align-items-center">
      <div>
        <h1 className="text-center text-uppercase  text-white fw-bold ">
          {test}
        </h1>

        <div className="d-flex justify-content-center align-items-center gap-4">
          <div className="line"></div>

          <i class="fa-solid fa-star text-white"></i>
          <div className="line"></div>
        </div>
      </div>
      <div className="d-flex gap-5  text-white">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
