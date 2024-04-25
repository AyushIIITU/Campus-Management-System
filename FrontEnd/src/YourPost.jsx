import axios from 'axios';
import  { useEffect, useState } from 'react'
import ComplainPostStudent from './ComplainPostStudent';

function YourPost() {
    
  return (
    <div style={{display: "flex", flexWrap:'wrap'}}>
    <ComplainPostStudent/>
    </div>
  )
}

export default YourPost;