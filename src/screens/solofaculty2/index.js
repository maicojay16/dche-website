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
import style from "@screens/solofaculty2/style.scss"


export default function FacultySolo2() {
 
      
    return (  
        <div className="facultysolo-main-content">
            <h1 className="intro"><div className="wrapper">Department of Chemical Engineering</div></h1>
           <div className="wrapper">
                <div className="main-content">
                    <div className="solo-intro-content">
                        <img src={Ocon}/>
                        <h1>OCON, Joey D.</h1>
                        <span>Associate Professor VII</span>
                    </div>
                    <div className="solo-contact">
                        <span>Email Address : <u>jdocon@up.edu.ph</u></span>
                        <span>Website : -</span>
                        <span>Google Scholar Link : <Link>https://scholar.google.com/citations?hl=en&user=lAD1TCwAAAAJ</Link></span>
                    </div>
                    <div className="solo-education">
                        <h2>Education</h2>
                        <li>BS ChE, University of the Philippines Diliman, 2008</li>
                        <li>MS ChE, University of the Philippines Diliman, 2011</li>
                        <li>PhD Envi Sci & Eng, GIST, 2015</li>
                    </div>
                    <div className="solo-research">
                        <h2>Research Interest</h2>
                        <li>Batteries and Fuel Cells </li>
                        <li>Electrochemistry and Catalysis</li>
                        <li>Green Technologies </li>
                        <li>Energy Engineering  </li>
                    </div>
                    <div className="solo-publications">
                        <h2>Publications</h2>
                        <li>G. Li, M. Divinagracia, J. D. Ocon, A. Chuang, Electrolyte-dependent Oxygen Evolution Reactions in Alkaline Media: Electrical Double Layer and Interfacial Interactions, ACS Applied Materials & Interfaces, 11 (2019) 33748-33758 (IF = 8.1). DOI: 10.1021/acsami.9b06889</li>
                        <li>H. Meschede, E. Esparcia, P. Holzapfel, R. C. Ang, A. C. Blanco, J. D. Ocon, On the Transferability of Smart Energy Systems on Islands using Cluster Analysis - A Case Study for the Philippine Archipelago, Applied Energy, 251 (2019) 113290 (IF = 8.2). DOI: http:// dx.doi.org/10.1016/j.apenergy.2019.05.093</li>
                        <li>E. Esparcia Jr., M. S. Chae, J. D. Ocon, S.-T. Hong, Ammonium Vanadium Bronze (NH4V4O10) as a High Capacity Cathode Material for Non-Aqueous Magnesium Batteries, Chemistry of Materials, 30 (2018) 3690-3696 (IF = 9.5) DOI: 10.1021/acs.chemmater. 8b00462.</li>
                        <li>A. A. Padama, A. P. Cristobal, J. D. Ocon, W. Diño, H. Kasai, Effect of Adsorption Structures of Adsorbates (CO, COH, HCO) in Adsorbate-Induced Migration of Pd Atoms in PdCu(111), The Journal of Physical Chemistry C, 121 (2017) 17818-17826. (IF = 4.5) DOI: 10.1021/acs.jpcc.7b02794. </li>
                        <li>Y. W. Phuan, M. N. Chong, W.-J. Ong, J. D. Ocon, Prospects of Electrochemically Sythesized Hematite Photoanodes for Photoelectrochemical Water Splitting: A Review, Journal of Photochemistry and Photobiology C: Photochemistry Reviews, 169 (2017) 236-244 (IF = 12.3) DOI: 10.1016/j.jphotochemrev.2017.10.001. </li>
                    </div>
                </div>
           </div>
        </div>
    );
}
