import React, {useState} from "react";
import Slider from "react-slick";
import FacultyBanner from "@assets/img/faculty-banner.JPG"
import StudentImage from "@assets/img/student-home.png"
import FacultyImage from "@assets/img/faculty-img.png"
import { Link } from "react-router-dom";
import style from "@screens/staff/style.scss"


export default function Staff() {
      
    return (  
        <div className="faculty-main-content">

            <div className="banner">
                <div className="banner-main-content">
                    <h1>Sample Title Header</h1>
                    <p className="sub-title-header">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>

            <div className="staff">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Support Staff Members</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="staff-data">
                            <div className="staff-data-content">
                                <div className="staff-group">
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Mr.  Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Ms. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Prof. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                                <div className="staff-group">
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Prof. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Mr. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Ms. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="staff">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Administrative</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="staff-data">
                            <div className="staff-data-content">
                                <div className="staff-group">
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Mr.  Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Ms. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Prof. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                                <div className="staff-group">
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Prof. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Mr. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="data">
                                        <img src={FacultyImage} />
                                        <span className="name">Ms. Juan Dela Cruz</span>
                                        <p className="job-title">Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
