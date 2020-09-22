import React, {useState} from "react";
import PubImage1 from "@assets/img/pub-image1.jpg"
import PubImage2 from "@assets/img/pub-image2.jpg"
import PubImage3 from "@assets/img/pub-image3.jpg"
import Book1 from "@assets/img/book1.JPG"
import Book2 from "@assets/img/book2.JPG"
import Book3 from "@assets/img/book3.JPG"
import { Link } from "react-router-dom";
import style from "@screens/researchlab/style.scss"


export default function ResearchLab() {

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
        <div className="researchlabs-main-content">

            <div className="banner">
                <div className="banner-main-content">
                    <h1>Sample Title Header</h1>
                    <p className="sub-title-header">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>

    
            <div className="researchlabs-stories">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title"><img src={PubImage1}/>Bioprocess Engineering Laboratory</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="researchlabs-stories-data">
                            <div className="researchlabs-stories-data-content">
                                <div className="researchlabs-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book1} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book2} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="researchlabs-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book3} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
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

            <div className="researchlabs-stories">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title"><img src={PubImage2}/>Catalyst Research Laboratory</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="researchlabs-stories-data">
                            <div className="researchlabs-stories-data-content">
                                <div className="researchlabs-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book1} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book2} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="researchlabs-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book3} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
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

            <div className="researchlabs-stories">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title"><img src={PubImage3}/>Laboratory of Electrochemical Engineering</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="researchlabs-stories-data">
                            <div className="researchlabs-stories-data-content">
                                <div className="researchlabs-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book1} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book2} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pub-stories-group">
                                    <div className="data">
                                        <div className="data-intro">
                                            <img src={Book3} />
                                            <div className="details">
                                                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                                                <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="extra-details">
                                                    <span className="date">Date: August 31, 2020</span>
                                                    <span className="author">Author: Prof. Juan Dela Cruz</span>
                                                    <span className="publisher">Publisher: Lorem ipsum</span>
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

           

        </div>
    );
}
