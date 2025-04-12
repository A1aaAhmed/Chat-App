import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import { RiContactsLine } from "react-icons/ri";

import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';



function Navbar() {
  const location = useLocation();

  // Check if current route is "/profile"
  const isProfilePage = location.pathname != '/profile';
  const isChat = location.pathname.includes('user')||location.pathname.includes('chat');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  if (isProfilePage) {
    return (
      <>
        {/* Sidebar for Mobile View */}
        <div
          className={`offcanvas offcanvas-start   ${isSidebarOpen ? "show" : ""}`}
          id="sidebar"
          aria-labelledby="offcanvasLabel"

        >
          <div className=" d-flex flex-column justify-start ps-3 pe-3">
            <div className="d-flex justify-content-between align-items-center">
              <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" className="rounded-circle" width="100" height="100" alt="Avatar" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"

              // onClick={() => setIsSidebarOpen(false)}
              />
            </div>
            <h5 className="mt-2">Maha Hassan</h5>
            <p>+201097751904</p>
          </div>
          <hr />
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <CgProfile size={24} />
                <a className="nav-link ms-3" aria-current="page" href="/profile">My Profile</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <RiContactsLine size={24} />
                <a className="nav-link ms-3" href="/contacts">Contacts</a>
              </li>
              {/* <li className="nav-item d-flex align-items-center">
              <IoSettingsOutline size={24} />
              <a className="nav-link ms-3" href="#">Settings</a>
            </li> */}
              <li className="nav-item d-flex align-items-center">
                <IoCallOutline size={24} />
                <a className="nav-link ms-3" href="/calls">Calls</a>
              </li>
              {/* <li className="nav-item d-flex align-items-center">
              <FiMessageSquare size={24}/>
              <a className="nav-link ms-3" href="#">Saved Messages</a>
            </li> */}
            </ul>
          </div>
        </div>

        <nav className=" navbar navbar-expand-lg navbar-dark bg-primary px-3">
          <div className="container-fluid">
            {/* Left Side - Menu Icon */}
            {!isChat ? (
              <button
                className="navbar-toggler border-0 d-lg-flex"
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
              >
                <FaBars size={24} />
              </button>
            ) : (
              <NavLink to="/">
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <IoIosArrowBack size={24} color="white"/>
                </button>
              </NavLink>
            )}



            {/* Telegram Title */}
            <span className="navbar-brand mx-auto">
              Telegram
            </span>

            {/* Right Side - Search Icon (Mobile) */}
            {/* <div className="d-lg-none">
            <FaSearch size={20} className="text-white" />
          </div> */}


          </div>
        </nav>

        {
          /* <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">Hola</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link  as={Link} to="/">Home</Nav.Link>
                <Nav.Link  as={Link} to="/profile">Profile</Nav.Link>
              </Nav>
            </Container>
          </Navbar> */
        }
      </>
    );
  } else {
    return (<></>)
  }
}

export default Navbar;


