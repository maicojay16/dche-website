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
import style from "@screens/solofaculty3/style.scss"


export default function FacultySolo3() {
 
      
    return (  
        <div className="facultysolo-main-content">
            <h1 className="intro"><div className="wrapper">Department of Chemical Engineering</div></h1>
           <div className="wrapper">
                <div className="main-content">
                    <div className="solo-intro-content">
                        <img src={Aberilla}/>
                        <h1>OCON, Joey D.</h1>
                        <span>Assistant Professor VI</span>
                    </div>
                    <div className="solo-contact">
                        <span>Email Address : <u>joaberilla@up.edu.ph</u></span>
                        <span>Website : <Link>https://pages.upd.edu.ph/jmaberilla</Link></span>
                        <span>Google Scholar Link : <Link>https://scholar.google.com/citations?user=3W29O3oAAAAJ&hl=en&oi=ao</Link></span>
                    </div>
                    <div className="solo-education">
                        <h2>Education</h2>
                        <li>BS ChE, University of the Philippines Diliman, 2011</li>
                        <li>MS Envi Sci & Engg, NUS, 2015</li>
                        <li>PhD ChE, U Manchester 2020</li>
                    </div>
                    <div className="solo-research">
                        <h2>Research Interest</h2>
                        <li>Life cycle sustainability assessment </li>
                        <li>Systems modeling and decision analysis</li>
                        <li>Engineering education and policy </li>
                    </div>
                    <div className="solo-publications">
                        <h2>Publications</h2>
                        <li>Aberilla, J.M., Gallego-Schmid, A., Stamford, L., & Azapagic, A. (2020). An integrated sustainability assessment of synergistic supply of energy and water in remote communities. Sustainable Production and Consumption, 22. https://doi.org/10.1016/j.spc.2020.01.003</li>
                        <li>Aberilla, J.M., Gallego-Schmid, A., Stamford, L., & Azapagic, A. (2020). Synergistic generation of energy and water in remote communities: Economic and environmental assessment of current situation and future scenarios. Energy Conversion and Management, 207, 112543. https://doi.org/10.1016/j.enconman.2020.112543</li>
                        <li>Aberilla, J.M., Gallego-Schmid, A., Stamford, L., & Azapagic, A. (2020). Environmental assessment of domestic water supply options for remote communities. Water Research, 175, 115687. https://doi.org/10.1016/J.WATRES.2020.115687</li>
                        <li>Aberilla, J.M., Gallego-Schmid, A., Stamford, L., & Azapagic, A. (2020). Environmental sustainability of cooking fuels in remote communities: Life cycle and local impacts. Science of the Total Environment, 713. https://doi.org/10.1016/j.scitotenv.2019.136445</li>
                        <li>Aberilla, J.M., Gallego-Schmid, A., Stamford, L., & Azapagic, A. (2020). Design and environmental sustainability assessment of small-scale off-grid energy systems for remote rural communities. Applied Energy, 258, 114004. https://doi.org/10.1016/j.apenergy.2019.114004</li>
                    </div>
                </div>
           </div>
        </div>
    );
}
