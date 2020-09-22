import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/img/logo.png"
import Logo1 from "@assets/img/logo/DOCE-Logo2.png"
import Logo2 from "@assets/img/logo/DOCE-Logo3.png"
import Logo3 from "@assets/img/logo/DOCE-Logo1.png"
import Logo4 from "@assets/img/logo/DOCE-Title.png"
import {  PhoneForwardedIcon, FacebookIcon, InstagramIcon, EmailIcon, TwitterIcon} from "@icons"
import style from "@molecule/Footer/style.scss"


export default function Footer() {
    return (
       <div>
           <div className="footer-section">
                <div className="upper-footer">
                    <div className="wrapper">
                        <div className="upper">
                            <h1>Connect With Us</h1>
                            <div className="social-media">
                                <FacebookIcon /> <InstagramIcon /> <EmailIcon /> <TwitterIcon/>
                            </div>
                        </div>
                        <div className="mid">
                            <div className="main-logo">
                                <img src={Logo1} className="uplogo"/>
                                <img src={Logo2} className="englogo"/>
                                <img src={Logo3} className="dchelogo"/>
                                <img src={Logo4} className="titlelogo"/>
                            </div>
                        </div>
                        <div className="lower">
                            <div className="address">
                                <p className="address-title">Department of Chemical Engineering</p>
                                <p className="address-details">
                                    Chemical Engineering Building, C. P.<br/>
                                    Garcia Ave., University of the Philippines,<br/>
                                    Diliman Quezon City, Philippines, 1101
                                </p>
                            </div>
                            <div className="telephone">
                                <p className="telephone-title"> <PhoneForwardedIcon/> Telephone:</p>
                                <p className="telephone-details">
                                    (+632) 981-85-00 ext 3113
                                </p>
                            </div>
                            <div className="email">
                                <p className="email-title"> <EmailIcon/> Email:</p>
                                <p className="email-details">
                                    coe.upd@edu.ph (General enquiries or feedback)<br/>
                                    coe.upd@edu.ph (Graduate Programmes)<br/>
                                    coe.upd@edu.ph (Executive Education)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-link">
                    <div className="wrapper">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li>
                                <Link>About Us</Link>
                                <ul className="lower-link">
                                    <li><Link to={"/deanswelcome"}>Dean's Welcome</Link></li>
                                    <li><Link to={"/visionandmission"}>Vision and Mission</Link></li>
                                    <li><Link to={"/governingboard"}>Governing Board</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>Our People</Link>
                                <ul className="lower-link">
                                    <li><Link to={"/faculty"}>Faculty</Link></li>
                                    <li><Link to={"/students"}>Students</Link></li>
                                    <li><Link to={"/alumni"}>Alumni</Link></li>
                                    <li><Link to={"/staff"}>Staffs</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>Graduates</Link>
                                <ul className="lower-link">
                                    <li><Link>Master</Link></li>
                                    <li><Link>PHD</Link></li>
                                </ul>
                            </li>
                            <li><Link to={"/publications"}>Publication</Link></li>
                            <li>
                                <Link>News and Events</Link>
                                <ul className="lower-link">
                                    <li><Link to={"/news"}>News</Link></li>
                                    <li><Link to={"/events"}>Events</Link></li>
                                </ul>
                            </li>
                            <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © 2018 Department of Chemical Engineering, UP - Diliman</p>
                </div>
                <div className="row">
                    <div className="nav-upper-color-1"></div>
                    <div className="nav-upper-color-2"></div>
                    <div className="nav-upper-color-3"></div>
                    <div className="nav-upper-color-4"></div>
                    <div className="nav-upper-color-5"></div>
                    <div className="nav-upper-color-6"></div>
                </div>
           </div>
       </div>
    );
}