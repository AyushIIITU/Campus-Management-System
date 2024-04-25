import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import img1 from "../../Images/IIITU-2.jpg";
import img2 from "../../Images/IIITU-3.jpg";
import img3 from "../../Images/IIITU-4.jpg";
function HomePageCrousal() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={img1} className='d-block w-100' style={{height:'600px'}} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={img2} className='d-block w-100' style={{height:'400px'}} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={img3} className='d-block w-100' style={{height:'400px'}} alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
export default HomePageCrousal;