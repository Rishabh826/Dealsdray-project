import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navebar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
             <div class="container-fluid">
    <a class="navbar-brand" to="/">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715126400&semt=sph" alt="Logo" width="60" height="50" class="d-inline-block align-text-top"/>
      
    </a>
  </div>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Createempl">Create Employee</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Editempl">Employee Edit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Employlist">Employee List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
