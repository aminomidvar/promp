import React from "react";

const dropdownData = {
    "Smartphones": ["Android", "iPhone", "Gaming Phones"],
    "Accessories": ["Chargers", "Cases & Covers", "Screen Protectors"],
    "Brands": ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus"],
    "Deals": ["New Releases", "Best Sellers", "Discounts & Offers"]
};

const DropdownMenu = ({ category }) => {
    return (
        <ul className="dropdown-content">
            {dropdownData[category]?.map((item, index) => (
                <li key={index}>
                    <a href="#">{item}</a>
                </li>
            ))}
        </ul>
    );
};

export default DropdownMenu;