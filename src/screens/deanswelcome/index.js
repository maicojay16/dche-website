import React from "react";
import Prof from "@assets/img/prof.png"
import style from "@screens/deanswelcome/style.scss"

export default function DeansWelcome() {
    return (  
        <div className="deanswelcome-main-content">
        
           <div className="deanswelcome-content">
                <div className="wrapper">
                    <div className="container">
                        <div className="content-title">
                            <h1>Chair's Message</h1>
                        </div>
                        <div className="main-content">
                            <div className="left">
                                <img src={Prof} />
                                <div className="sub">
                                    <p className="name">
                                        Professor Juan Dela Cruz
                                    </p>
                                    <p className="job-title">
                                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>
                                    </p>
                                </div>
                            </div>
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros nunc, tempor a vulputate eu, commodo id quam. 
                                    Pellentesque maximus velit at tellus rutrum pretium. Sed augue est, pellentesque ac mauris tincidunt, iaculis volutpat enim. Nullam 
                                    vel commodo mauris, in pulvinar neque. Phasellus vulputate nisl dui, nec eleifend tellus aliquet in. Cras tempus ac sem ut rutrum. Phasellus 
                                    semper ornare lectus id rutrum. Proin vitae leo ut libero sollicitudin tristique pretium at ante. Etiam ut dictum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a sapien ut dolor tristique fringilla a et ex. Fusce ut suscipit arcu. Nam purus eros, posuere eget dapibus in, semper quis purus. Morbi non tellus feugiat, iaculis lorem ac, efficitur ex.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros nunc, tempor a vulputate eu, commodo id quam. 
                                Pellentesque maximus velit at tellus rutrum pretium. Sed augue est, pellentesque ac mauris tincidunt, iaculis volutpat enim. Nullam 
                                vel commodo mauris, in pulvinar neque. Phasellus vulputate nisl dui, nec eleifend tellus aliquet in. Cras tempus ac sem ut rutrum. Phasellus 
                                semper ornare lectus id rutrum. Proin vitae leo ut libero sollicitudin tristique pretium at ante. Etiam ut dictum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a sapien ut dolor tristique fringilla a et ex. Fusce ut suscipit arcu. Nam purus eros, posuere eget dapibus in, semper quis purus. Morbi non tellus feugiat, iaculis lorem ac, efficitur ex.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}
