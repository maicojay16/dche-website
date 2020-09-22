import React, {useState} from "react";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from "@icons";
import Banner1 from "@assets/img/banner/banners01.png"
import Banner2 from "@assets/img/banner/banners02.png"
import Banner3 from "@assets/img/banner/banners03.png"
import Banner4 from "@assets/img/banner/banners04.png"
import RankImage1 from "@assets/img/Rankings-01.png"
import RankImage2 from "@assets/img/Rankings-02.png"
import RankImage3 from "@assets/img/Rankings-03.png"
import StudentImage from "@assets/img/student-home.png"
import BackgroundPHDM from "@assets/img/background-mphd.png"
import FacultyImage from "@assets/img/faculty-img.png"
import PubImage1 from "@assets/img/pub-image1.jpg"
import PubImage2 from "@assets/img/pub-image2.jpg"
import PubImage3 from "@assets/img/pub-image3.jpg"
import PubImage4 from "@assets/img/pub-image4.png"
import PubImage5 from "@assets/img/pub-image5.png"
import PubImage6 from "@assets/img/pub-image6.png"
import ResAreas1 from "@assets/img/researchareas/data_science_maroon.png"
import ResAreas2 from "@assets/img/researchareas/drug_dev_maroon.png"
import ResAreas3 from "@assets/img/researchareas/energy_maroon.png"
import ResAreas4 from "@assets/img/researchareas/environment_maroon.png"
import ResAreas5 from "@assets/img/researchareas/industrial_maroon.png"
import ResAreas6 from "@assets/img/researchareas/manufacturing_maroon.png"
import Deleon from "@assets/img/profs/deleon.png"
import Dalida from "@assets/img/profs/dalida.png"
import Tumolva from "@assets/img/profs/tumolva.png"
import Ocon from "@assets/img/profs/ocon.png"
import Aberilla from "@assets/img/profs/Aberilla.jpg"
import Pilario from "@assets/img/profs/pilario.png"
import { Link } from "react-router-dom";
import style from "@screens/home/style.scss"


export default function Home() {

    function NextArrow({ className, onClick }) {
        return (
            <ChevronRightIcon onClick={onClick} className={className}/>
        );
    }
    function PrevArrow({ className, onClick }) {
        return (
            <ChevronLeftIcon onClick={onClick} className={className}/>
        );
    }

    const bannerSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        lazyload: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow className="next"/>,
        prevArrow: <PrevArrow className="prev" />
    };

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

    const [accordFirst, setAccordFirst] = useState(false)
    const [accordSecond, setAccordSecond] = useState(false)
    const [accordThird, setAccordThird] = useState(true)

    function onClickAccord1(){
        if( accordThird ){
            setAccordFirst(false)
            setAccordSecond(true)
            setAccordThird(false)
        }else {
            setAccordFirst(false)
            setAccordSecond(false)
            setAccordThird(true)
        }
    }

    function onClickAccord2(){
        if( accordSecond ){
            setAccordFirst(true)
            setAccordSecond(false)
            setAccordThird(false)
        }else {
            setAccordFirst(false)
            setAccordSecond(true)
            setAccordThird(false)
        }
    }

    function onClickAccord3(){
        if( accordFirst ){
            setAccordFirst(false)
            setAccordSecond(false)
            setAccordThird(true)
        }else {
            setAccordFirst(true)
            setAccordSecond(false)
            setAccordThird(false)
        }
    }

    console.log(accordFirst)
    console.log(accordSecond)
    console.log(accordThird)


      
    return (  
        <div className="home-main-content">
            <div className="banner">
                <Slider {...bannerSettings}>
                    <div className="slider-content">
                        <img src={Banner1} />
                        <div className="slider-main-content">
                            <h1>The Department of Chemical Engineering</h1>
                            <p className="sub-title-header">
                             proudly upholds the
                            University’s values of Honor and Excellence in its pursuit of the nation’s
                            progress.
                            </p>
                            <Link>More Info</Link>
                        </div>
                    </div>
                    <div className="slider-content">
                        <img src={Banner2} />
                        <div className="slider-main-content">
                            <h1>DChE Entry</h1>
                            <p className="sub-title-header">
                            This General Community Quarantine (GCQ), safety protocols for
                            access to the DChE building are imposed. Face masks and face shields are
                            to be worn at all times within the building premises.
                            </p>
                            <Link>More Info</Link>
                        </div>
                    </div>
                    <div className="slider-content">
                        <img src={Banner3} />
                        <div className="slider-main-content">
                            <h1>Remote Learning</h1>
                            <p className="sub-title-header">
                            Given the persistence of the COVID-19 pandemic, the first
                            semester of AY 2020-2021 shall be delivered remotely. As a new experience
                            to both students and instructors, we encourage everyone to maintain good
                            communication in order to address any problems that may arise.
                            </p>
                            <Link>More Info</Link>
                        </div>
                    </div>
                    <div className="slider-content">
                        <img src={Banner4} />
                        <div className="slider-main-content">
                            <h1>New DChE Website</h1>
                            <p className="sub-title-header">
                            The DChE Website has been revamped! Do explore the new
                            features and stories we’ve compiled for you. You can reach the
                            administration at any time for your inquiries. Contact Us:
                            jdjeremias@up.edu.ph or rmroxas@up.edu.ph
                            </p>
                            <Link>More Info</Link>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="rankings">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">RANKINGS</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="rankings-data">
                            <div className="row-data">
                                <img src={RankImage1} />
                                <div className="ranks">
                                    <span className="actual-rank">65th</span>
                                    <span className="sub-rank">in the Asia</span>
                                    <span className="sub-data">(THE Asia University Rankings)</span>
                                </div>
                            </div>
                            <div className="row-data">
                                <img src={RankImage2} />
                                <div className="ranks">
                                    <span className="actual-rank">1st</span>
                                    <span className="sub-rank">in Philippines</span>
                                    <span className="sub-data">Top Performing School ChE Licensure Exam (2014-2019)</span>
                                </div>
                            </div>
                            <div className="row-data">
                                <img src={RankImage3} />
                                <div className="ranks">
                                    <span className="actual-rank">1st</span>
                                    <span className="sub-rank">in Philippines</span>
                                    <span className="sub-data">In size of student and faculty body</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="eventsandtestimonials">
                <div className="wrapper">
                    <div className="container">
                        <div className="content">
                            <div className="events">
                                <h1 className="title">EVENTS</h1>
                                <p className="sub">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="events-data">
                                    <div className="events-details">
                                        <div className="left">
                                            <span className="day">1</span>
                                            <span className="month">Sept</span>
                                            <span className="year">2020</span>
                                        </div>
                                        <div className="right">
                                            <p className="event-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className="time"><span>Time: </span> 11:00am - 12:00pm (PHT)</p>
                                            <p className="location"><span>Location: </span>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                    <div className="events-details">
                                        <div className="left">
                                            <span className="day">1</span>
                                            <span className="month">Sept</span>
                                            <span className="year">2020</span>
                                        </div>
                                        <div className="right">
                                            <p className="event-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className="time"><span>Time: </span> 11:00am - 12:00pm (PHT)</p>
                                            <p className="location"><span>Location: </span>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                    <div className="events-details">
                                        <div className="left">
                                            <span className="day">1</span>
                                            <span className="month">Sept</span>
                                            <span className="year">2020</span>
                                        </div>
                                        <div className="right">
                                            <p className="event-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className="time"><span>Time: </span> 11:00am - 12:00pm (PHT)</p>
                                            <p className="location"><span>Location: </span>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                    <Link to={"/events/"}>View All</Link>
                                </div>
                                
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourstudents">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">OUR STUDENTS AT A GLANCE</h1>
                        <p className="sub-title">We produce chemical engineers who are well-equipped with the analytical and
                            technical knowledge necessary in engineering the nation’s future. Our graduates
                            walk out of the university with a common goal - spearhead the development of
                            technology, with social and environmental responsibility, in the interest of
                            national progress.</p>
                        <div className="ourstudents-data">
                           <div className="content">
                               <span className="intake">Typical intake </span>
                               <div className="middle">
                                   <h2>120 STUDENTS</h2>
                               </div>
                               <div className="last">
                                    <h2>120 SLOTS</h2> 
                                    <span>are given to the department every start of the academic year to be filled out by UPCAT passers</span>
                               </div>
                           </div>
                        </div>
                        <Link to={"/students/"}>Learn More</Link>
                    </div>
                </div>
            </div>

			<div className="faculty">
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
                                <h1 className="title">FACULTY</h1>
                                <p className="sub">
                                    The ChE Department is home to its brilliant faculty, each member bringing
                                    different perspectives and approaches to chemical engineering education and
                                    research.
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
                                    <Link to={"/faculty/"}>View All</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mastersandphd">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">PROGRAMS OFFERED</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="accordion-wrapper">

                            <div className="phd-header" id="ah1" onClick={onClickAccord3}><h2>PhDChE</h2></div>
                            <div className={"phd-body"+" "+(accordFirst ? "active" : "")}  id="ac1">
                                <div className="body-content">
                                    <img src={BackgroundPHDM}/>
                                    <div className="phd-data" 
                                        style={{ 
                                            visibility: accordFirst ? "visible" : "hidden", 
                                            opacity: accordFirst ? 1 : 0 ,
                                            transition:  accordFirst ? "visibility 1s, opacity 1s ease-out" : "visibility 0s, opacity 0s linear"
                                        }}>
                                        <div className="phd-data-content">
                                           <div className="intro">
                                                <h2>PhD ChE</h2>
                                                <p className="sub">PhDChE ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                           </div>
                                           <div className="box">
                                               <div className="box-data-group">
                                                    <div className="box-data">
                                                        <span className="title">Class Profile</span>
                                                        <p className="desc">
                                                            Engineering students who have a solid foundation of math and
                                                            science needed for understanding, expressing and applying
                                                            chemical engineering principles
                                                        </p>
                                                    </div>
                                                    <div className="box-data">
                                                        <span className="title">Curriculum</span>
                                                        <p className="desc">
                                                            Students will be introduced to the pillars of chemical
                                                            engineering—thermodynamics, chemical reaction engineering
                                                            kinetics, and transport phenomena—as well as other more specialized
                                                            topics.
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className="box-data-group">
                                                    <div className="box-data">
                                                        <span className="title">Admissions Criteria</span>
                                                        <p className="desc">
                                                            The program admits senior high school graduates, preferably from
                                                            the STEM track, who have passed the UPCAT. Prospective
                                                            shiftees/transferees may consult with the College of Engineering
                                                            Administration Office for guidance.
                                                        </p>
                                                    </div>
                                                    <div className="box-data">
                                                        <span className="title">Faculty</span>
                                                        <p className="desc">
                                                            Undergraduates will be guided by the best minds in chemical
                                                            engineering education, ensuring that their personal and academic
                                                            growth takes front and center stage.
                                                        </p>
                                                    </div>
                                               </div>
                                               <Link>Read More</Link>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="masters-header" id="ah2" onClick={onClickAccord2}><h2>MSChE</h2></div>
                            <div className={"masters-body"+" "+(accordSecond ? "active" : "")}  id="ac2">
                                <div className="body-content" style={{ display: accordSecond ? "block" : "none" }}>
                                    <img src={BackgroundPHDM}/>
                                    <div className="masters-data" 
                                        style={{ 
                                            visibility: accordSecond ? "visible" : "hidden", 
                                            opacity: accordSecond ? 1 : 0 ,
                                            transition:  accordSecond ? "visibility 2s, opacity 1.5s ease-out" : "visibility 0s, opacity 0s linear"
                                        }}>
                                        <div className="masters-data-content">
                                           <div className="intro">
                                                <h2>MS ChE</h2>
                                                <p className="sub">Masters in Chemical Engineering</p>
                                           </div>
                                           <div className="box">
                                               <div className="box-data-group">
                                                    <div className="box-data">
                                                        <span className="title">Class Profile</span>
                                                        <p className="desc">
                                                            Engineering students who have a solid foundation of math and
                                                            science needed for understanding, expressing and applying
                                                            chemical engineering principles
                                                        </p>
                                                    </div>
                                                    <div className="box-data">
                                                        <span className="title">Curriculum</span>
                                                        <p className="desc">
                                                            Students will be introduced to the pillars of chemical
                                                            engineering—thermodynamics, chemical reaction engineering
                                                            kinetics, and transport phenomena—as well as other more specialized
                                                            topics.
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className="box-data-group">
                                                    <div className="box-data">
                                                        <span className="title">Admissions Criteria</span>
                                                        <p className="desc">
                                                            The program admits senior high school graduates, preferably from
                                                            the STEM track, who have passed the UPCAT. Prospective
                                                            shiftees/transferees may consult with the College of Engineering
                                                            Administration Office for guidance.
                                                        </p>
                                                    </div>
                                                    <div className="box-data">
                                                        <span className="title">Faculty</span>
                                                        <p className="desc">
                                                            Undergraduates will be guided by the best minds in chemical
                                                            engineering education, ensuring that their personal and academic
                                                            growth takes front and center stage.
                                                        </p>
                                                    </div>
                                               </div>
                                               <Link>Read More</Link>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bs-header" id="ah2" onClick={onClickAccord1}><h2>BSChE</h2></div>
                            <div className={"bs-body"+" "+(accordThird ? "active" : "")}  id="ac2">
                                <div className="body-content" style={{ display: accordThird ? "block" : "none" }}>
                                    <img src={BackgroundPHDM}/>
                                    <div className="bs-data" 
                                        style={{ 
                                            visibility: accordThird ? "visible" : "hidden", 
                                            opacity: accordThird ? 1 : 0 ,
                                            transition:  accordThird ? "visibility 2s, opacity 1.5s ease-out" : "visibility 0s, opacity 0s linear"
                                        }}>
                                        <div className="bs-data-content">
                                           <div className="intro">
                                                <h2>BS ChE</h2>
                                                <p className="sub">Bachelor of Science in Chemical Engineering</p>
                                           </div>
                                           <div className="box">
                                               <div className="box-data-group">
                                                    <div className="box-data">
                                                        <span className="title">Class Profile</span>
                                                        <p className="desc">
                                                            Engineering students who have a solid foundation of math and
                                                            science needed for understanding, expressing and applying
                                                            chemical engineering principles
                                                        </p>
                                                    </div>
                                                    <div className="box-data">
                                                        <span className="title">Curriculum</span>
                                                        <p className="desc">
                                                            Students will be introduced to the pillars of chemical
                                                            engineering—thermodynamics, chemical reaction engineering
                                                            kinetics, and transport phenomena—as well as other more specialized
                                                            topics.
                                                        </p>
                                                    </div>
                                               </div>
                                               <div className="box-data-group">
                                                    <div className="box-data">
                                                        <span className="title">Admissions Criteria</span>
                                                        <p className="desc">
                                                            The program admits senior high school graduates, preferably from
                                                            the STEM track, who have passed the UPCAT. Prospective
                                                            shiftees/transferees may consult with the College of Engineering
                                                            Administration Office for guidance.
                                                        </p>
                                                    </div>
                                                    <div className="box-data">
                                                        <span className="title">Faculty</span>
                                                        <p className="desc">
                                                            Undergraduates will be guided by the best minds in chemical
                                                            engineering education, ensuring that their personal and academic
                                                            growth takes front and center stage.
                                                        </p>
                                                    </div>
                                               </div>
                                               <Link>Read More</Link>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="phd-header" id="ah2" onClick={onClickAccord}><h2>PHD</h2></div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="researchareas">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">RESEARCH AREAS</h1>
                        <p className="sub-title">Staying true to our mission of providing innovative and sustainable solutions
                        to the technological challenges in the society, government, and industry through
                        research, we have identified the following department’s research areas.</p>
                        <div className="researchareas-data">
							<div className="researchareas-group">
								<div className="researchareas-data-content">
                                    <img src={ResAreas1} />
									<span className="title">Data Science and Machine Intelligence</span>
								</div>
								    <div className="researchareas-data-content">
                                    <img src={ResAreas2} />
									<span className="title">Diagnostics and Drug Development</span>
								</div>
                                <div className="researchareas-data-content">
                                    <img src={ResAreas3} />
									<span className="title">Energy Systems and Technologies</span>
								</div>
							</div>
                            <div className="researchareas-group">
								<div className="researchareas-data-content">
                                    <img src={ResAreas4} />
									<span className="title">Environment Systems and Technologies</span>
								</div>
								    <div className="researchareas-data-content">
                                    <img src={ResAreas5} />
									<span className="title">Industrial Process Engineering  </span>
								</div>
                                <div className="researchareas-data-content">
                                    <img src={ResAreas6} />
									<span className="title">Manufacturing &amp; Product Development</span>
								</div>
							</div>
							<Link>View More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="researchlab">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">RESEARCH LABORATORIES</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="researchlab-data">
							<div className="researchlab-group">
								<div className="researchlab-data-content">
									<div className="logo"><img src={PubImage1} /></div>
									<span className="title">Bioprocess Engineering Laboratory</span>
								</div>
								    <div className="researchlab-data-content">
                                <div className="logo"><img src={PubImage2} /></div>
									<span className="title">Catalyst Research Laboratory</span>
								</div>
                                <div className="researchlab-data-content">
                                    <div className="logo"><img src={PubImage3} /></div>
									<span className="title">Fuels, Energy, and Thermal Systems Laboratory</span>
								</div>
							</div>
							<div className="researchlab-group">
								<div className="researchlab-data-content">
                                    <div className="logo"><img src={PubImage4} /></div>
									<span className="title">Laboratory of Electrochemical Engineering</span>
								</div>
								<div className="researchlab-data-content">
                                    <div className="logo"><img src={PubImage5} /></div>
									<span className="title">Polymer Research Laboratory</span>
								</div>
                                <div className="researchlab-data-content">
                                    <div className="logo"><img src={PubImage6} /></div>
									<span className="title">Process Systems Engineering Laboratory</span>
								</div>
							</div>
							<Link>View More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="publication">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="title">PUBLICATIONS</h1>
                        <p className="sub-title">The ChE Department is active in producing world-class research in numerous
                            fields related to chemical engineering. Check out our latest work from these
                            international publications.</p>
                        <div className="publication-data">
							<div className="publication-group">
								<div className="publication-data-content">
                                    <div className="left">
                                        <div className="left-data">
                                            <span className="date">07 Sep 2020</span>
                                        </div>
                                        <img src={BackgroundPHDM}></img>
                                    </div>
                                    <div className="right">
                                        <div className="right-data">
                                            <span className="journal">Test Journal Name</span>
                                            <h1 className="title">Lorem ipsum dolor sit amet, amet consectetur...</h1>
                                            <p className="sub-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididuntconsectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididunt</p>
                                            <span className="authors">Juan Dela Cruz - John Doe</span>
                                        </div>
                                    </div>
								</div>
                                <div className="publication-data-content">
                                    <div className="left">
                                        <div className="left-data">
                                            <span className="date">07 Sep 2020</span>
                                        </div>
                                        <img src={BackgroundPHDM}></img>
                                    </div>
                                    <div className="right">
                                        <div className="right-data">
                                            <span className="journal">Test Journal Name</span>
                                            <h1 className="title">Lorem ipsum dolor sit amet, amet consectetur...</h1>
                                            <p className="sub-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididuntconsectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididunt</p>
                                            <span className="authors">Juan Dela Cruz - John Doe</span>
                                        </div>
                                    </div>
								</div>
							</div>
                            <div className="publication-group">
								<div className="publication-data-content">
                                    <div className="left">
                                        <div className="left-data">
                                            <span className="date">07 Sep 2020</span>
                                        </div>
                                        <img src={BackgroundPHDM}></img>
                                    </div>
                                    <div className="right">
                                        <div className="right-data">
                                            <span className="journal">Test Journal Name</span>
                                            <h1 className="title">Lorem ipsum dolor sit amet, amet consectetur...</h1>
                                            <p className="sub-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididuntconsectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididunt</p>
                                            <span className="authors">Juan Dela Cruz - John Doe</span>
                                        </div>
                                    </div>
								</div>
                                <div className="publication-data-content">
                                    <div className="left">
                                        <div className="left-data">
                                            <span className="date">07 Sep 2020</span>
                                        </div>
                                        <img src={BackgroundPHDM}></img>
                                    </div>
                                    <div className="right">
                                        <div className="right-data">
                                            <span className="journal">Test Journal Name</span>
                                            <h1 className="title">Lorem ipsum dolor sit amet, amet consectetur...</h1>
                                            <p className="sub-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididuntconsectetur adipiscing elit, sed do eiusmod tempor incididunt. eiusmod tempor incididunt</p>
                                            <span className="authors">Juan Dela Cruz - John Doe</span>
                                        </div>
                                    </div>
								</div>
							</div>
							<Link to={"/publications/"}>View More</Link>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
}
