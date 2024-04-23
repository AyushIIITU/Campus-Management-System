// import React from 'react'
// import { RiDeleteBin6Line } from "react-icons/ri";
import StarRating from "./Componets/Rating/Rating";
import "./Popup.css"
import { ImCross } from "react-icons/im";
function ReviewPopUp(props) {

  return (props.trigger)?(
    <div className="popup">
        <div className='popup-inner'>
            {/* <button className='close-btn' onClick={()=>{props.closePopUp(false)}}>close</button> */}
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-light border border-light rounded-circle" onClick={()=>{props.closePopUp(false)}}><ImCross style={{width:'-webkit-fill-available'}} /></span>
            {props.children}
            {/* <StarRating/> */}
        </div>
    </div>
  ):"";
}

export default ReviewPopUp;