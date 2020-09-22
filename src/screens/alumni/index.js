import React, {useState} from "react";
import Slider from "react-slick";
import FacultyBanner from "@assets/img/faculty-banner.JPG"
import StudentImage from "@assets/img/student-home.png"
import FacultyImage from "@assets/img/faculty-img.png"
import StudentsImage1 from "@assets/img/students-stories1.png"
import StudentsImage2 from "@assets/img/students-stories2.png"
import { Link } from "react-router-dom";
import style from "@screens/alumni/style.scss"


export default function Faculty() {

    const testimonialSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        lazyload: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
      
    return (  
        <div className="alumni-main-content">

            <div className="banner">
                <div className="banner-main-content">
                    <h1>Sample Title Header</h1>
                    <p className="sub-title-header">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>

			<div className="alumni-testimonials">
                <div className="wrapper">
                    <div className="container">
                        <div className="content">
                            <div className="testimonials">
                                <Slider {...testimonialSettings}>
                                    <div className="testimonials-content">
                                        <img src={StudentImage} />
                                        <h2 className="name">Juan Dela Cruz</h2>
                                        <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <blockquote>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </blockquote>
                                        <Link>Learn More</Link>
                                    </div>
                                    <div className="testimonials-content">
                                        <img src={StudentImage} />
                                        <h2 className="name">Juan Dela Cruz</h2>
                                        <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <blockquote>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </blockquote>
                                        <Link>Learn More</Link>
                                    </div>
                                    <div className="testimonials-content">
                                        <img src={StudentImage} />
                                        <h2 className="name">Juan Dela Cruz</h2>
                                        <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <blockquote>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </blockquote>
                                        <Link>Learn More</Link>
                                    </div>
                                </Slider>
                            </div>
                            <div className="alumni-data">
                                <h1 className="title">ALUMNI TESTIMONIALS</h1>
                                <p className="sub">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="alumni-data-content">
                                    <div className="alumni-group">
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
                                    <div className="alumni-group">
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
            <div className="row">
                <div className="nav-upper-color-1"></div>
                <div className="nav-upper-color-2"></div>
                <div className="nav-upper-color-3"></div>
                <div className="nav-upper-color-4"></div>
                <div className="nav-upper-color-5"></div>
                <div className="nav-upper-color-6"></div>
            </div>
            <div className="alumni-class">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Top Class Alumni</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="alumni-class-data">
                            <div className="alumni-class-data-content">
                                <div className="alumni-class-group">
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
                                <div className="alumni-class-group">
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
            <div className="row">
                <div className="nav-upper-color-1"></div>
                <div className="nav-upper-color-2"></div>
                <div className="nav-upper-color-3"></div>
                <div className="nav-upper-color-4"></div>
                <div className="nav-upper-color-5"></div>
                <div className="nav-upper-color-6"></div>
            </div>
            <div className="alumni-stories">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Alumni Stories</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="alumni-stories-data">
                            <div className="alumni-stories-data-content">
                                <div className="alumni-stories-group">
                                    <div className="data">
                                        <img src={StudentsImage1} />
                                        <div className="details">
                                            <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div className="lower-details">
                                            <Link>Read More</Link>
                                        </div>
                                    </div>
                                    <div className="data">
                                        <img src={StudentsImage2} />
                                        <div className="details">
                                            <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div className="lower-details">
                                            <Link>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="alumni-stories-group">
                                    <div className="data">
                                        <img src={StudentsImage1} />
                                        <div className="details">
                                            <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div className="lower-details">
                                            <Link>Read More</Link>
                                        </div>
                                    </div>
                                    <div className="data">
                                        <img src={StudentsImage2} />
                                        <div className="details">
                                            <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div className="lower-details">
                                            <Link>Read More</Link>
                                        </div>
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
