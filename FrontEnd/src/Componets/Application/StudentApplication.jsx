import axios from "axios";
import React from "react";
// import { Button, Collapse } from "react-bootstrap";
import StudentApplicationCard from "./StudentApplicationCard";
// import StudentApplicationCard form "./StudentApplicationCard"
function StudentApplication() {
  const [applicaion, setApplicantion] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/application/applicationToStudent/${localStorage.getItem(
          "StudentId"
        )}`
      );
      
      setApplicantion(response.data);
      console.log(response.data);
    } catch (err) {
      if(err.response.status==404){
        setApplicantion([]);
      }else{
        console.error("Error in Getting Public Posts ", err);
      }
      
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {applicaion.map((appli) => (
        <div key={appli._id}>
          <StudentApplicationCard appli={appli} fetchApplication={fetchData}/>
        </div>
      ))}
    </div>
  );
}

export default StudentApplication;
