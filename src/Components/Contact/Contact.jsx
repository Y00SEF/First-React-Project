import React, { useEffect } from "react";

export default function Contact() {
  // To Write Title page

  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    // Contact Page Tags

    <div className="container-md cc p-4  ww">
      <div>
        <h1 className="text-center  fw-bold ">Contact Section</h1>

        <div className="d-flex justify-content-center align-items-center gap-4">
          <div class="line"></div>

          <i className="fa-solid fa-star "></i>
          <div className="line"></div>
        </div>
      </div>

      <div className="inputs d-flex flex-column p-5 gap-5 w-100">
        <input type="text" className="form-control" placeholder="userName" />
        <input type="text" className="form-control" placeholder="userAge" />
        <input type="email" className="form-control" placeholder="userEmail" />
        <input
          type="password"
          className="form-control"
          placeholder="userPassword"
        />

        <button className="btn btn-success">Send Message</button>
      </div>
    </div>
  );
}
