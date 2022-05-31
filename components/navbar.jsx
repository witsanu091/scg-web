import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";
import logo from "../assets/scg-log.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <Image
            src={logo}
            alt="Picture of the author"
            width={100}
            height={60}
          />
        </Link>

        <div className="d-flex ">
          <div id="navbarsExample07XL">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample07XL"
              aria-controls="navbarsExample07XL"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link href={`/register`}>
                  <a className="nav-link">Register</a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/userList">
                  <a className="nav-link">User List</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Nav>
  );
}
