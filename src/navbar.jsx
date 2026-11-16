import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    🏥 MediCare
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Menu
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end">

                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/register">
                                        Register
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}