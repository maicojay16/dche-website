import React, {useState} from "react";
import Slider from "react-slick";
import FacultyBanner from "@assets/img/faculty-banner.JPG"
import StudentImage from "@assets/img/student-home.png"
import FacultyImage from "@assets/img/faculty-img.png"
import Deleon from "@assets/img/profs/deleon.png"
import Dalida from "@assets/img/profs/dalida.png"
import Tumolva from "@assets/img/profs/tumolva.png"
import Ocon from "@assets/img/profs/ocon.png"
import Aberilla from "@assets/img/profs/Aberilla.jpg"
import Pilario from "@assets/img/profs/pilario.png"
import { Link } from "react-router-dom";
import style from "@screens/faculty/style.scss"


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
        <div className="faculty-main-content">

            <div className="banner">
                <div className="banner-main-content">
                    <h1>Sample Title Header</h1>
                    <p className="sub-title-header">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>

			<div className="faculty-testimonials">
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
                            <div className="faculty-data">
                                <h1 className="title">FACULTY TESTIMONIALS</h1>
                                <p className="sub">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="faculty-data-content">
                                <div className="faculty-group">
                                        <div className="data">
                                            <img src={Deleon} />
                                            <span className="name">Rizalinda L. De Leon</span>
                                            <p className="job-title">Professor VI</p>
                                        </div>
                                        <div className="data">
                                            <img src={Dalida} />
                                            <span className="name">Maria Lourdes P. Dalida</span>
                                            <p className="job-title">Professor</p>
                                        </div>
                                        <div className="data">
                                            <img src={Tumolva} />
                                            <span className="name">Terence P. Tumolva</span>
                                            <p className="job-title">Professor II</p>
                                        </div>
                                    </div>
                                    <div className="faculty-group">
                                        <div className="data">
                                            <img src={Ocon} />
                                            <span className="name">Joey D. Ocon</span>
                                            <p className="job-title">Associate Professor VII</p>
                                        </div>
                                        <div className="data">
                                            <img src={Aberilla} />
                                            <span className="name">Jhud Mikhail O. Aberilla</span>
                                            <p className="job-title">Assistant Professor VI</p>
                                        </div>
                                        <div className="data">
                                            <img src={Pilario} />
                                            <span className="name">Karl Ezra S. Pilario</span>
                                            <p className="job-title">Assistant Professor V</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="prof">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Professors</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="prof-data">
                            <div className="prof-data-content">
                                <div className="prof-group">
                                    <div className="data">
                                        <Link to={"/faculty/deleon"}><img src={Deleon} /></Link>
                                        <span className="name">Rizalinda L. De Leon</span>
                                        <p className="job-title">Professor VI</p>
                                    </div>
                                    <div className="data">
                                        <img src={Dalida} />
                                        <span className="name">Maria Lourdes P. Dalida</span>
                                        <p className="job-title">Professor</p>
                                    </div>
                                    <div className="data">
                                        <img src={Tumolva} />
                                        <span className="name">Terence P. Tumolva</span>
                                        <p className="job-title">Professor II</p>
                                    </div>
                                </div>
                                <div className="prof-group">
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

            <div className="prof">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Associate Professors</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="prof-data">
                            <div className="prof-data-content">
                                <div className="prof-group">
                                    <div className="data">
                                        <Link to={"/faculty/ocon"}><img src={Ocon} /></Link>
                                        <span className="name">Joey D. Ocon</span>
                                        <p className="job-title">Associate Professor VII</p>
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
                                <div className="prof-group">
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

            <div className="prof">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Assistant Professors</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="prof-data">
                            <div className="prof-data-content">
                                <div className="prof-group">
                                    <div className="data">
                                        <Link to={"/faculty/aberilla"}><img src={Aberilla} /></Link>
                                        <span className="name">Jhud Mikhail O. Aberilla</span>
                                        <p className="job-title">Assistant Professor VI</p>
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
                                <div className="prof-group">
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

            <div className="prof">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Instructor</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="prof-data">
                            <div className="prof-data-content">
                                <div className="prof-group">
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
                                <div className="prof-group">
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
