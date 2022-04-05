import React from "react";

import { Link as ScrollLink } from 'react-scroll'

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><ScrollLink offset={-80} to="about">About</ScrollLink></li>
                    <li><ScrollLink offset={-100} to="skills">Skills</ScrollLink></li>
                    <li><ScrollLink offset={-100} to="projects">Projects</ScrollLink></li>
                    <li><ScrollLink offset={-100} to="contact">Contact</ScrollLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;