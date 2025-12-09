import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [scroll, setScroll] = useState("p-4");

  useEffect(() => {
    function NavScroll() {
      if (window.scrollY > 40) {
        setScroll("p-1");
      } else {
        setScroll("p-4");
      }
    }

    window.addEventListener("scroll", NavScroll);

    return () => window.removeEventListener("scroll", NavScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bb ${scroll} z-1 position-fixed top-0 w-100 `}
    >
      <Container>
        <Link
          className="text-white fw-bold text-decoration-none text-uppercase fs-1"
          to="/"
        >
          Start Framework
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3 fs-5 list-unstyled  ">
            <NavLink
              className={({ isActive }) =>
                "nav-link text-white fw-bold text-uppercase text-decoration-none " +
                (isActive ? "active bg-success text-white rounded p-2 " : "")
              }
              to="About"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-link text-white fw-bold text-uppercase text-decoration-none " +
                (isActive ? "active bg-success text-white rounded p-2 " : "")
              }
              to="Protfolio"
            >
              Protfolio
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-link text-white fw-bold text-uppercase text-decoration-none " +
                (isActive ? "active bg-success text-white rounded p-2 " : "")
              }
              to="Contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
