import React from "react";
import DriverContext from "./DriverContext";
const DriverContextProvider=({children})=>{
    const [driver,setDriver]=React.useState([]);
    return (
        <DriverContext.Provider  value={{driver, setDriver}}>
        {children}
        </DriverContext.Provider>
    )
}
export default DriverContextProvider;