import "./StudentPortalHeader.css"
import IIITULOGO from "./Images/IIITULogo.png"
const HeaderStudentPortal=()=>{
    return(
     
      <header className="d-flex justify-content-center p-3 text-white StudentPortalHeader" >
     <div className="HeaderIIT">
     <img
        src={IIITULOGO}
        
        alt="IIIT UNA"
      /><div>Indian Institute of Information Technology Una</div>
      </div>
  
     
    </header>
      
    )
}
export default HeaderStudentPortal;