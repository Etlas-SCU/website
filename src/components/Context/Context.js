import { createContext, useState } from "react";

export const Context = createContext();

export const Provider= (props)=>{
    const {children}=props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langPopup, setLangPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState([false, ""]);


    const AllContext ={
        mobileOpen,
        setMobileOpen,
        langPopup,
        setLangPopup,
        buttonPopup,
        setButtonPopup
    }
   
    return  <Context.Provider value={AllContext}>
      <div style={{position:"sticky" ,backgroundColor:"var(--mainColor)"}}>
        {children}
        </div>
    </Context.Provider>
}