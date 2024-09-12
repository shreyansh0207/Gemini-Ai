import React, { useContext } from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () =>{

    const {onSent,setRecentPrompt,loading,setResultData,setShowResult,setInput,userinput,showResult,result,nowPrompt} = useContext(Context)


    return(
        <div className="startsection">
            <div className="navbar">
                <p>Gemini</p>
                <img src = {assets.alone001} alt= ""></img>
            </div>
            <div className="startsection-container">

            <div className="greet">
                    <p><span>Hello....</span></p>
                    <p>How can i help you</p>
                </div>
    
              {!showResult
              
              ?<>
              <div className="section1">
                    <div className="section">
                        <p>What's the time it takes to walk to several landmarks</p>
                        <img src={assets.compass_wala} alt=""></img>
                    </div>
                    <div className="section">
                        <p>How do I build a birdhouse for a feathered friend?</p>
                        <img src={assets.message_wala} alt=""></img>
                    </div>
                    <div className="section">
                        <p>Show me how to build something by handle</p>
                        <img src={assets.code_wala} alt=""></img>
                    </div>
                    <div className="section">
                        <p>Provide question to help me prepare for an interview</p>
                        <img src={assets.blub_wala} alt=""></img>
                    </div>
                </div>
                </>:<div className="nowshowtheresult">
                    <div className="showtheresulthere">
                         <img src={assets.alone001} alt="" /> 
                        <p>{nowPrompt}</p>
                    </div>
                    <div className="theresultdata">
                        {/* <img src={assets.alone001} alt="" /> */}
                        <p dangerouslySetInnerHTML={{__html:result}}></p>


                    </div>
                </div>


              }

             
                


                <div className="bottonsection">
                    <div className="bottom">
                      <input onChange={(e)=>setInput(e.target.value)} value={userinput} type="text" placeholder="Likhnaa padhega edharr ab"></input>
                      <div>
                        <img src={assets.gallery_wala} alt="" /> 
                        <img onClick={()=>onSent()}src={assets.send_wala} alt="" /> 
                        {/* <img src={assets.mic_wala} alt="" /> */}
                      </div> 
                    </div>
                    <p className="bottom2">
                        <p></p>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Main