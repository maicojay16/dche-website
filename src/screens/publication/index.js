import React, {useState} from "react";
import PubImage1 from "@assets/img/pub-image-sample.jpg"
import PubImage2 from "@assets/img/pub-image2.jpg"
import PubImage3 from "@assets/img/pub-image3.jpg"
import Book1 from "@assets/img/book1.JPG"
import Book2 from "@assets/img/book2.JPG"
import Book3 from "@assets/img/book3.JPG"
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@icons";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PersonIcon from '@material-ui/icons/Person';
import style from "@screens/publication/style.scss"


export default function Publication() {

    const [show, setShow] = useState(false)

    function handleshow(){
        setShow(show ? false : true)
    }

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
        <div className="pub-main-content">

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
                        <div className="pub-stories-data">
                            <div className="pub-stories-data-content">
                                <div className="tags">
                                    <span className="journal">Sample Journal Name</span>
                                    <span className="date">Sept 10 2020</span>
                                </div>
                                <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                                <p className="author">By: <PersonIcon/> Juan Dela Cruz , <PersonIcon/> Juan Dela Cruz</p>
                                <div className="abstract">
                                    <p><span>Abtract : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clickable">
                                    <div className="click-span">
                                        <span className="showarticle" onClick={handleshow}><ChevronRightIcon /> Show Article</span>
                                        <span><PictureAsPdfIcon /> Download PDF</span>
                                    </div>
                                    <figure style={{ display: show ? "block" : "none" }}>
                                        <img src={PubImage1} />
                                    </figure>
                                </div>
                            </div>
                            <div className="pub-stories-data-content">
                                <div className="tags">
                                    <span className="journal">Sample Journal Name</span>
                                    <span className="date">Sept 10 2020</span>
                                </div>
                                <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                                <p className="author">By: <PersonIcon/> Juan Dela Cruz , <PersonIcon/> Juan Dela Cruz</p>
                                <div className="abstract">
                                    <p><span>Abtract : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clickable">
                                    <div className="click-span">
                                        <span className="showarticle" onClick={handleshow}><ChevronRightIcon /> Show Article</span>
                                        <span><PictureAsPdfIcon /> Download PDF</span>
                                    </div>
                                    <figure style={{ display: show ? "block" : "none" }}>
                                        <img src={PubImage1} />
                                    </figure>
                                </div>
                            </div>
                            <div className="pub-stories-data-content">
                                <div className="tags">
                                    <span className="journal">Sample Journal Name</span>
                                    <span className="date">Sept 10 2020</span>
                                </div>
                                <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                                <p className="author">By: <PersonIcon/> Juan Dela Cruz , <PersonIcon/> Juan Dela Cruz</p>
                                <div className="abstract">
                                    <p><span>Abtract : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clickable">
                                    <div className="click-span">
                                        <span className="showarticle" onClick={handleshow}><ChevronRightIcon /> Show Article</span>
                                        <span><PictureAsPdfIcon /> Download PDF</span>
                                    </div>
                                    <figure style={{ display: show ? "block" : "none" }}>
                                        <img src={PubImage1} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
}
