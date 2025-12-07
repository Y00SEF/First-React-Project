import React from "react";

export default function Footer() {
  return (
    // Footer Tags
    <>
      <div className="container-fluid mb-0 bb  text-white">
        <div className="d-md-flex  justify-content-center gap-5  p-5 ms-5 ">
          <div className=" text-center mt-md-0 ">
            <h3>Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className=" text-center mt-md-0 mt-5">
            <h3>AROUND THE WEB</h3>
            <i className="fa-brands ms-2 fs-3 fa-facebook"></i>
            <i className="fa-brands ms-2 fs-3 fa-twitter"></i>
            <i className="fa-brands ms-2 fs-3 fa-linkedin"></i>
            <i className="fa-brands ms-2 fs-3 fa-google"></i>
          </div>
          <div className=" text-center mt-md-0 mt-5">
            <h3>ABOUT FREELANCER</h3>
            <p>2215 John Daniel Drive</p>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-center fs-4 p-4">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
