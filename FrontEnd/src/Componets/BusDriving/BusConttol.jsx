
import DriverContextProvider from "../../Context/DriverContextProvider";
import BusUserController from "./BusUserController.jsx"
const BusControl=()=>{
    return (
        <DriverContextProvider>
            {/* <DrivLoginProfile/> */}
            <BusUserController/>
        
    </DriverContextProvider>
    )
};
export  default BusControl;