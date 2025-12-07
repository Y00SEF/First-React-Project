import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
  return (
    // Nav Bar Tags
    <Navbar expand="lg" className="bb p-4 z-1 position-fixed top-0 w-100   ">
      <Container>
        <Link
          className="text-white fw-bold text-decoration-none text-uppercase fs-1"
          to="/"
        >
          Start Framework
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="ms-auto d-flex gap-3 fs-5 list-unstyled  ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-white fw-bold text-uppercase text-decoration-none " +
                  (isActive ? "active bg-success text-white rounded p-2 " : "")
                }
                // className="text-white fw-bold text-uppercase text-decoration-none"
                to="About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-white fw-bold text-uppercase text-decoration-none " +
                  (isActive ? "active bg-success text-white rounded p-2 " : "")
                }
                to="Protfolio"
              >
                Protfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-white fw-bold text-uppercase text-decoration-none " +
                  (isActive ? "active bg-success text-white rounded p-2 " : "")
                }
                to="Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
