import React, { useState } from "react";
import "./../styles/navbar.css";
import DropdownMenu from "./DropdownMenu";

const categories = ["Smartphones", "Accessories", "Brands", "Deals"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1>Mobile Hub</h1>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href="#">{category}</a>
                        <DropdownMenu category={category} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;