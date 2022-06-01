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

        <div
          className="rowlapse navbar-rowlapse"
          style={{ width: "200px", fontSize: "15px", display: "contents" }}
        >
          <ul className="navbar-nav mr-auto" style={{ flexDirection: "row" }}>
            <li className="nav-item active m-2">
              <Link href={`/register`}>
                <a className="nav-link ">Register</a>
              </Link>
            </li>
            <li className="nav-item active m-2">
              <Link href="/userList">
                <a className="nav-link">User List</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
