import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={faIdCardAlt} />
                <span>{title}</span>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "Contact Keeper",
};

export default Navbar;
