import React, {useState} from "react";
import Slider from "react-slick";
import StudentsImage1 from "@assets/img/students-stories1.png"
import StudentsImage2 from "@assets/img/students-stories2.png"
import Dchelogo from "@assets/img/dchelogo.png"
import Book2 from "@assets/img/book2.JPG"
import Book3 from "@assets/img/book3.JPG"
import { Link } from "react-router-dom";
import style from "@screens/news/style.scss"


export default function News() {

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
        <div className="news-main-content">

            <div className="banner">
                <div className="banner-main-content">
                    <h1>Sample Title Header</h1>
                    <p className="sub-title-header">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>

            <div className="pub-stories">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">Announcements</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="pub-stories-data">
                            <div className="pub-stories-data-content">
                                <div className="pub-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Dchelogo} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Dchelogo} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pub-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Dchelogo} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link>Read More</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="alumni-stories">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">News</h1>
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
