import React from "react";

export const Navbar = () => {
  return (
    <div id="top">
      <nav className="navbar navbar-expand-lg " id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              classNameName="rounded"
              width="50px"
              style={{ marginBottom: "15px" }}
              src="https://cdn-icons-png.freepik.com/256/13888/13888467.png?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  style={{ color: "white" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu-bar" style={{ color: "white" }}>
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#product"
                  style={{ color: "white" }}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  style={{ color: "white" }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#vlogs"
                  style={{ color: "white" }}
                >
                  Vlogs
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
