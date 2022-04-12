import React from 'react'
import {Link} from "react-router-dom";
import logo from'./logo.png'
import './Header.css'

console.log(logo)

export default function Header() {
    return (
    <div className="header-company">
      <nav className=" navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="header-company-nav container-fluid">
        <a href={"https://evolvfit.in/"} target="_blank">
          <img src={logo} />
        </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex flex-row-reverse">
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                <p className="text-white h4 mx-3">Users</p>

                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <p className="text-white h4 mx-3">Admin</p></Link>
              </li>
              
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          </div>
        </div>
      </nav>
      </div>
    )
}
