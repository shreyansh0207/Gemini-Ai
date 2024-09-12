import { createContext, useState } from "react";
import run from "../wellapi/well";

export const Context  =  createContext()

const ContextProvider = (props) =>{

    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [result,setResultData] = useState("")
    const [userinput,setInput] = useState(" ")
    const [nowPrompt,setRecentPrompt] = useState(" ")
    const [previousPrompt,setPreviousPrompt] = useState([]);




  const onSent = async (prompt) => {
    setResultData(" ")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(userinput)


    
    const response = await run(userinput);
    setResultData(response);
    setLoading(false);
    setInput(" ");

  }

//   onSend("What is Shreyansh")


    const contextValue = {

        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        nowPrompt,
        result,
        loading,
        //setResultData,
        userinput,
        setInput,showResult,


    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider