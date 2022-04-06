import React from "react";

import { Link as ScrollLink } from 'react-scroll'

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><ScrollLink offset={-90} to="about">About</ScrollLink></li>
                    <li><ScrollLink offset={-110} to="skills">Skills</ScrollLink></li>
                    <li><ScrollLink offset={-110} to="projects">Projects</ScrollLink></li>
                    <li><ScrollLink offset={-110} to="contact">Contact</ScrollLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;