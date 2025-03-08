
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaSearch, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar for Mobile View */}
      <div
        className={`offcanvas offcanvas-start ${isSidebarOpen ? "show" : ""}`}
        id="sidebar"
      >
        <div className=" d-flex flex-column justify-start ps-3 pe-3">
          <div className="d-flex justify-content-between align-items-center">
          <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" className="rounded-circle" width="100" height="100" alt="Avatar"/>
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsSidebarOpen(false)}
          />
          </div>
          <h5 className="mt-2">Maha Hassan</h5>
          <p>+201097751904</p>
        </div>
        <hr/>
        <div className="offcanvas-body">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <CgProfile size={24} />
              <a className="nav-link ms-3" aria-current="page" href="#">My Profile</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <RiContactsLine size={24}/>
              <a className="nav-link ms-3" href="#">Contacts</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <IoSettingsOutline size={24} />
              <a className="nav-link ms-3" href="#">Settings</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <IoCallOutline size={24} />
              <a className="nav-link ms-3" href="#">Calls</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <FiMessageSquare size={24}/>
              <a className="nav-link ms-3" href="#">Saved Messages</a>
            </li>
        </ul>
        </div>
      </div>

      <nav className=" navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <div className="container-fluid">
          {/* Left Side - Menu Icon */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars size={24} />
          </button>

          {/* Telegram Title */}
          <a className="navbar-brand mx-auto d-lg-none" href="#">
            Telegram
          </a>

          {/* Right Side - Search Icon (Mobile) */}
          <div className="d-lg-none">
            <FaSearch size={20} className="text-white" />
          </div>

          {/* Large Screen Navbar Content */}
          <div className="collapse navbar-collapse justify-content-between ">
            {/* Left - Menu with Dropdown */}
            <ul className="navbar-nav d-none d-lg-flex">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <FaBars size={24} />
                </a>
                <ul className="dropdown-menu p-2">
                  <li className="d-flex align-items-center">
                  <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" className="rounded-circle" width="50" height="50" alt="Avatar"/>
                    <a className="dropdown-item" href="#">Maha Hassan</a></li>
                  <hr/>
                  <li className="d-flex align-items-center">
                    <FiMessageSquare size={24}/>
                    <a className="dropdown-item" href="#">Saved Messages</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <RiContactsLine size={24}/>
                    <a className="dropdown-item" href="#">contacts</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <IoSettingsOutline size={24}/>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Center - Search Field */}
            <form className="d-none d-lg-flex w-75">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


  