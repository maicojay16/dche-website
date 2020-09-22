import React from "react";
import style from "@screens/visionandmission/style.scss"

export default function VisionAndMission() {
    return (  
        <div className="visionandmission-main-content">
           <div className="visionandmission-content">
                <div className="wrapper">
                    <div className="container">
                        <div className="content-title">
                            <h1>Vision And Mission</h1>
                        </div>
                        <div className="vision">
                            <h2>Vision</h2>
                            <p>The Department envisions to be an institution of higher education that fosters academic excellence through teaching, research, and extension service in chemical engineering, thereby contributing to national progress and global innovation.</p>
                        </div>
                        <div className="mission">
                            <h2>Mission</h2>
                            <p>The UP Diliman Department of Chemical Engineering commits to product world-class chemical engineering graduates; to provide innovative and sustainable solutions to the technological challenges in the society, government and industry through research; and to spearhead the development of technology with social and environmental responsibility in the interest of national progress</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}
