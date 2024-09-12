import React, { useState } from "react";
import './Sidesection.css';
import { assets } from "../../assets/assets";
const Sidesection = () => {

    const [menuextended, setSection] = useState(false)




    return (

        <div className="sidesection">
            <div className="uppersection">
                
                <img onClick={()=>setSection(prev=>!prev)}className="menu" src={assets.menu_wala} alt="" ></img>
                <div className="new-section" >
                    <img src={assets.plus_wala} alt=" "></img>
                    {menuextended ? <p>New message</p> : null}  
                </div>
                {menuextended ?
                    <div className="recentsearch">
                        <p className="recent">Recent</p>
                        <div className="recent-used">
                            <img src={assets.message_wala} alt=""></img>
                            <p>What is Spiritual ?</p>
                        </div>
                    </div>
                    : null}


            </div>
            <div className="downsection">
                <div className="bottom-parts recent-used">
                    <img src={assets.question_wala} alt=""></img>
                   {menuextended? <p>Help</p>:null}
                </div>
                <div className="bottom-parts recent-used">
                    <img src={assets.history_wala} alt=""></img>
                    {menuextended?<p>History</p>:null}
                </div>
                <div className="bottom-parts recent-used">
                    <img src={assets.setting_wala} alt=""></img>
                    {menuextended?<p>Setting</p>:null}
                </div>



            </div>

        </div>
    )
}

export default Sidesection