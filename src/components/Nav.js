import React from 'react'
import { Link } from 'react-scroll';
import { FaAlignJustify } from "react-icons/fa";
function Navbar() {
    
    const [state, setState] = React.useState(true);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
               {/* <div  className='navbar__left-logo'>
                <img src='src/components/logo.webp' alt='' /></div> */}
                <h1 style={{color:'#ff4a57'}}>H.S</h1>
                    { state ? (
                        <ul className="navbar__right">
                            <li>
                                <Link
                                    to="home"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    Home
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