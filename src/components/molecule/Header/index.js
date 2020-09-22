import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@icons"
import Logo1 from "@assets/img/logo/DOCE-Logo2.png"
import Logo2 from "@assets/img/logo/DOCE-Logo3.png"
import Logo3 from "@assets/img/logo/DOCE-Logo1.png"
import Logo4 from "@assets/img/logo/DOCE-Title.png"
import style from "@molecule/Header/style.scss"


export default function Header() {
    return (
       <div>
            <div className="row">
                <div className="nav-upper-color-1"></div>
                <div className="nav-upper-color-2"></div>
                <div className="nav-upper-color-3"></div>
                <div className="nav-upper-color-4"></div>
                <div className="nav-upper-color-5"></div>
                <div className="nav-upper-color-6"></div>
            </div>
           <div className="header-nav">
                <div className="wrapper">
                    <div className="upper-nav">
                        <div className="main-logo">
                            <img src={Logo1} className="uplogo"/>
                            <img src={Logo2} className="englogo"/>
                            <img src={Logo3} className="dchelogo"/>
                            <img src={Logo4} className="titlelogo"/>
                        </div>
                        <div className="search">
                           <div className="search-container">
                                <SearchIcon />
                                <input type="text" placeholder="Search"/>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="nav-links">
                    <div className="container">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li id="about-us">
                                <Link>About Us</Link>
                                <ul className="dropdown">
                                    <li><Link to={"/deanswelcome"}>Chair's Message</Link></li>
                                    <li><Link to={"/visionandmission"}>Vision and Mission</Link></li>
                                    <li><Link to={"/governingboard"}>Administrator</Link></li>
                                </ul>
                            </li>
                            <li id="our-people">
                                <Link>Our People</Link>
                                <ul className="dropdown">
                                    <li><Link to={"/faculty"}>Faculty</Link></li>
                                    <li><Link to={"/students"}>Students</Link></li>
                                    <li><Link to={"/alumni"}>Alumni</Link></li>
                                    <li><Link to={"/staff"}>Staffs</Link></li>
                                </ul>
                            </li>
                            <li id="graduates">
                                <Link>Programs</Link>
                                <ul className="dropdown">
                                    <li><Link>Bachelors</Link></li>
                                    <li><Link>Master</Link></li>
                                    <li><Link>PhD</Link></li>
                                </ul>
                            </li>
                            <li id="graduates">
                                <Link>Research</Link>
                                <ul className="dropdown">
                                    <li><Link>Research Areas</Link></li>
                                    <li><Link>Research Laboratories</Link></li>
                                    <li><Link>Projects</Link></li>
                                </ul>
                            </li>
                            {/* <li><Link to={"/publications"}>Research</Link></li> */}
                            <li><Link to={"/publications"}>Publication</Link></li>
                            <li id="newsandevents">
                                <Link>News And Events</Link>
                                <ul className="dropdown">
                                    <li><Link to={"/news"}>News</Link></li>
                                    <li><Link to={"/events"}>Events</Link></li>
                                </ul>
                            </li>
                            <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="header-intro">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
           </div>
       </div>
    );
}