import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Protfolio() {
  // Virabels And Function To Active Dialog
  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (imgSrc) => {
    setModalImg(imgSrc);
    setShow(true);
  };
  // To Write Title page

  useEffect(() => {
    document.title = "Protfolio";
  }, []);

  const images = [
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
  ];

  return (
    // Protfolio Page Tags
    <div>
      <div className="container cc pt-5 ">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center fw-bold">Start Framework</h1>

          <div className="d-flex justify-content-center align-items-center gap-4">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
        </div>

        <div className="row g-5 p-5">
          {images.map((img, i) => (
            <div className="col-md-4" key={i}>
              <div
                onClick={() => handleShow(img)}
                className="inner overflow-hidden position-relative"
                style={{ cursor: "pointer" }}
              >
                <div className="item position-absolute bg-success opacity-75 rounded-3 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid ll fa-plus text-white"></i>
                </div>
                <img src={img} alt="Image" className="w-100 rounded-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dialog Modal  */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <img src={modalImg} alt="" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
