import { Button } from "bootstrap";
import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light text-dark justify-content-around">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-light" href="/">
          <img
            src="https://ex-coders.com/html/boimela/assets/img/logo/logo.svg"
            alt="logo"
            width={200}
            height={50}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-5 text-dark">
            <li className="nav-item">
              <a className="nav-link  active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
           
           
          </ul>
               <button className="bg-info border-0 p-2 rounded-1 px-4">
                    Login
                </button>
        </div>
      </div>
    </nav>
  );
}
