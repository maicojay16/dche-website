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
import style from "@screens/solofaculty/style.scss"


export default function FacultySolo() {

 
      
    return (  
        <div className="facultysolo-main-content">
            <h1 className="intro"><div className="wrapper">Department of Chemical Engineering</div></h1>
           <div className="wrapper">
                <div className="main-content">
                    <div className="solo-intro-content">
                        <img src={Deleon}/>
                        <h1>DE LEON, Rizalinda L.</h1>
                        <span>Professor VI</span>
                    </div>
                    <div className="solo-contact">
                        <span>Email Address : <u>rldeleon@up.edu.ph</u></span>
                        <span>Website : -</span>
                        <span>Google Scholar Link : <Link>https://ggle.io/3OMl</Link></span>
                    </div>
                    <div className="solo-education">
                        <h2>Education</h2>
                        <li>BS ChE, University of the Philippines Diliman, 1982</li>
                        <li>MS EgyE, University of the Philippines Diliman, 1988</li>
                        <li>PhD ChE, University of the Philippines Diliman, 2006</li>
                    </div>
                    <div className="solo-research">
                        <h2>Research Interest</h2>
                        <li>Production Processes for Biorefineries - hydrogen, bio-oil, bioethanol, platform chemicals </li>
                        <li>Technical and HSSE aspects of LNG regulations</li>
                        <li>Tools for energy/environment technology assessment</li>
                    </div>
                    <div className="solo-publications">
                        <h2>Publications</h2>
                        <li>Khuong, L.D., Kondo, R., de Leon, R., Kim Anh, T., Shimizu, K., and Kamei, I. (2014) Bioethanol production from alkaline-pretreated sugarcane bagasse by consolidated bioprocessing using Phlebia sp. MG-60, International Biodeterioration & Biodegradation, vol 88 p62-68</li>
                        <li>Khuong, L.D., Kondo, R., de Leon, R., Anh, T. K., Meguro, S., and Shimizu, K. (2014) Effect of chemical factors on integrated fungal fermentation of sugarcane bagasse for ethanol production by a white-rot fungus, Phlebia sp. MG-60, Bioresource Technology pp.33-40.</li>
                        <li>Lu, M.-C., Biel, L.C.C., Wan, M.-W., de Leon, R., and Arco, S. (2014) The oxidative desulfurization of fuels with a transition metal catalyst: A comparative assessment of different mixing techniques. International Journal of Green Energy. Vol.11 (8), pp. 833-848</li>
                        <li>Lu, M –C, Biel, L. C. C., Wan, M-W, de Leon, R., Arco, S. and Futalan C. M. (2014) Adsorption of dibenzothiophene sulfone from fuel using chitosan-coated bentonite (CCB) as biosorbent Desalination and Water Treatment DOI:10.1080/19443994.2014.996773</li>
                        <li>K.R. Tolod, C.J.E. Bajamundi, R.L. de Leon, P. Sreearunothai, R. Khunphonoi & N. Grisdanurak, Visible Light-drive Photocatalytic Hydrogen Production using Cu-doped SrTiO3. Energy Sources, Part A: Recovery, Utilization, and Environmental Effects – Decision on Manuscript ID UESO-2012-0941.R2.(accepted for publication)</li>
                    </div>
                </div>
           </div>
        </div>
    );
}
