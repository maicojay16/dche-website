import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Header from "@molecule/Header/"
import Footer from "@molecule/Footer/"
import Home from "@screens/home/"
import VisionAndMission from "@screens/visionandmission/"
import GoverningBoard from "@screens/governingboard/"
import DeansWelcome from "@screens/deanswelcome";
import Faculty from "@screens/faculty";
import Staff from "@screens/staff";
import Student from "@screens/student";
import Alumni from "@screens/alumni";
import ResearchLab from "@screens/researchlab";
import News from "@screens/news";
import Events from "@screens/events";
import Publication from "@screens/publication";
import FacultySolo from "@screens/solofaculty";
import FacultySolo2 from "@screens/solofaculty2";
import FacultySolo3 from "@screens/solofaculty3";
import Fonts from "@fonts"
import MainTheme from "@src/theme.scss"

export default function Screen() {

    return (  
        <div>
            <Router>
                <Header />
                    <div>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/visionandmission"} component={VisionAndMission} />
                        <Route exact path={"/governingboard"} component={GoverningBoard} />
                        <Route exact path={"/deanswelcome"} component={DeansWelcome} />
                        <Route exact path={"/faculty"} component={Faculty} />
                        <Route exact path={"/faculty/deleon"} component={FacultySolo} />
                        <Route exact path={"/faculty/ocon"} component={FacultySolo2} />
                        <Route exact path={"/faculty/aberilla"} component={FacultySolo3} />
                        <Route exact path={"/staff"} component={Staff} />
                        <Route exact path={"/students"} component={Student} />
                        <Route exact path={"/alumni"} component={Alumni} />
                        <Route exact path={"/researchlab"} component={ResearchLab} />
                        <Route exact path={"/publications"} component={Publication} />
                        <Route exact path={"/news"} component={News} />
                        <Route exact path={"/events"} component={Events} />
                        {/* <Redirect to={"/"} /> */}
                    </div>
                <Footer />
            </Router>
        </div>
    );
}
