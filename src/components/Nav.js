import React from 'react'
import { Link } from 'react-scroll';
import { FaAlignJustify } from "react-icons/fa";
function Navbar() {
    
    const [state, setState] = React.useState(true);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    { state ? (
                        <ul className="navbar__right">
                            <li>
                                <Link
                                    to="home"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    HomePage
    </Link>
                            </li>
                            <li>
                                <Link
                                    to="ser"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Portfolio
    </Link>

                            </li>
                            <li>
                                <Link
                                    to="tecn"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Technical skills
    </Link>

                            </li>
                            <li>
                                <Link
                                    to="about"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    About
    </Link>

                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Contact
    </Link>
                            </li>
                        </ul>
                    ):''
            }
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
                    
                </div>
            </div>
        </nav>
    )

}

export default Navbar;