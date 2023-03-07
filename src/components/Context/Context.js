import { createContext, useState } from "react";

export const Context = createContext();

export const Provider= (props)=>{
    const {children}=props;
    const [backgroundColor, setbackgroundColor] = useState("#003441");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langPopup, setLangPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState([false, ""]);


    const AllContext ={
        setbackgroundColor,
        backgroundColor,
        mobileOpen,
        setMobileOpen,
        langPopup,
        setLangPopup,
        buttonPopup,
        setButtonPopup
    }
   
    return  <Context.Provider value={AllContext}>
      <div style={{ backgroundColor: backgroundColor, position: "sticky" }}>
        {children}
        </div>
    </Context.Provider>
}