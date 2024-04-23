import axios from "axios";
import React from "react";
import { Button, Collapse } from "react-bootstrap";
import toast from "react-hot-toast";
import ReviewPopUp from "../../ReviewPopUp";
import StarRating from "../Rating/Rating";

function StudentApplicationCard({ appli, fetchApplication }) {
  const HandlerID = {
    "Director": "660e9077117805cb4a95d7d6",
    "Hostel Warden Boys": "660e9055117805cb4a95d7d0",
    "Mr. Goldy (Hostel Assistant)": "660e9020117805cb4a95d7cd",
    "Mr. Sukh Sagar (Batch 2022-26)": "6618fa03d49ed5a61975f3fc",
    "Mr. Deepak(Civil)": "6619095bd49ed5a61975f3ff",
    "Dr. Vikram Kumar Associate Dean (Admin)": "660e906a117805cb4a95d7d3",
    "Mr. Manoj (Hostel Assistant)":"662577f949e7ca9e2e4b506f"
  };
  const [open, setOpen] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const statusParts = appli.status.split(":");
  const statusClassName = statusParts[0].trim().startsWith("Accepted")
    ? "bg-success"
    : statusParts[0].trim().startsWith("Rejected")
    ? "bg-danger"
    : "bg-primary";
  const TimeDiffer = (
    (Date.now() - new Date(appli.updatedAt).getTime()) /
    (1000 * 60 * 60 * 24)
  ).toFixed(1);
  // let extraFeature=null;
  const handleSelectHandler = (event) => {
    setSelectedHandler(event.target.value);
    console.log(event.target.value)
    
  };
  
  const [newHandlers, setNewHandlers] = React.useState([]);
  const [selectedHandler, setSelectedHandler] = React.useState([]);
  const onEsclate = async() => {
   try {
    const response= await axios.put(`http://localhost:3000/application/esclate/${appli._id}`,{
      handlerIdToUpdate:HandlerID[selectedHandler],
    })
    if (response.status==404){
        toast.error('Invalid  Handler Id')
    }else{
      
        toast.success('Escallation Successful');
        fetchApplication();
    }
   } catch (err) {
    console.log(err);
    toast.error("Error escalating the application!");
   }
  };
  const MatterToHandelrList = {
    AcademicsMatters: [
      [
        "Mr.Lakhvinder Singh (Batch 2023-27)",
        "Mr. Sukh Sagar (Batch 2022-26)",
        "Mr. Ashwani Kumar (Batch 2020-24)",
      ],
      ["Ms. Shilpa"],
      ["Dr. Nishtha Hooda"],
    ],
    AdministrativeMatters: [
      ["Ms. Kusum Dhiman"],
      ["Mr. Ashwani Kumar"],
      ["Dr. Vikram Kumar Associate Dean (Admin)"],
    ],
    MessandHostelMatters: [
      [
        "Mr. Goldy (Hostel Assistant)",
        "Mr. Manoj (Hostel Assistant)",
        "Mr. Hariom (Hostel Assistant)",
      ],
      ["Hostel Warden Boys", "Hostel Warden Girls"],
    ],
    FeeandOtherRelatedIssues: [
      ["Mr. Rajesh Kumar"],
      ["Sh. R. K. Verma Consultant (Fin.)"],
      ["Sh. Uttam Patial Consultant (Audit)"],
    ],
    TrainingPlacementInternship: [["Dr.Naman Garg"]],
    Scholarship: [["Dr. Ankur Kumar", "Dr. Shivdutt Sharma"]],
    SportsandOutdoorActivities: [["Dr. Ankur Kumar", "Dr. Naveen"]],
    CivilandElectricalWorks: [
      [
        "Mr. Deepak(Civil)",
        "Mr. Rahul (Civil)",
        "Mr. Nitin Dhillon (Electrical)",
        "Mr. Ayush Sharma (Civil)",
      ],
    ],
    ICT: [
      ["Mr. Rohit Sharma", "Mr. Avinash", "Mr. Paramjeet", "Mr. Nitin Kumar"],
      ["Dr. Vikram Kumar ICT In-charge"],
    ],
    Admission: [["Dr. Shatrughan Modi"]],
  };
  React.useEffect(() => {
    if (TimeDiffer > 2 && statusClassName === "bg-primary") {
      for (let i = 0; i < MatterToHandelrList[appli.subject].length; i++) {
        const currentHandlers = MatterToHandelrList[appli.subject][i];
        if (currentHandlers.includes(appli.handlerId.name)) {
          // Exclude the current handler
          const filteredHandlers = currentHandlers.filter(
            (handler) => handler !== appli.handlerId.name
          );
          // Set the next handler as the new handler if available
          if (i < MatterToHandelrList[appli.subject].length - 1) {
            const nextHandlers = MatterToHandelrList[appli.subject][i + 1];
            setNewHandlers([...filteredHandlers, ...nextHandlers]);
            // console.log([...filteredHandlers, ...nextHandlers]);
          } else {
            setNewHandlers(filteredHandlers);
          }
          setSelectedHandler(filteredHandlers[0]);
          break;
        }
      }
    }
  }, [appli, TimeDiffer, statusClassName]);
  const handleReview=async()=>{
    console.log("hello")
  }
  const ExtraFeature=(TimeDiffer > 2 && statusClassName === "bg-primary" )?(
    <>
      <select
        className="form-select"
        id="inputGroupSelect02"
        value={selectedHandler}
        onChange={handleSelectHandler}
      >
        {newHandlers.map((handler, index) => (
          <option key={index} value={handler}>
            {handler}
          </option>
        ))}
      </select>
      <button onClick={onEsclate} className="btn btn-warning">Escalate</button> or <button className="btn btn-danger" onClick={()=>{handleReview;setPopup(true)}}>Review Delete</button>
    </>
  ):null;
  
  //   extraFeature=(<>
  //   <select
  //             className="custom-select"
  //             id="inputGroupSelect02"
  //             value={selectedHandler}
  //             onChange={handleSelectHandler}
  //           >
  //             {MatterToHandelrList[appli.subject].map((handler, index) => (
  //               <option key={index} value={handler}>{handler}</option>
  //             ))}
  //           </select>
  //   <button onClick={onEsclate}></button></>)
  // }

  const handleOnReject = async (AppliacionId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/application/${AppliacionId}`
      );
      console.log(response);
      toast.success("Application is Rejected");
      fetchApplication();
    } catch (err) {
      toast.error("Error in applicaion", err);
    }
  };
  const handleError=()=>{
    console.log(HandlerID[selectedHandler]);
  }
  
  return (
    <>
      <div className="cookie-card" style={{ width: "25vh", margin: "1vh" }}>
        <span className="title">Subject</span>
        <p className="description">{appli.subject} </p>
        <br />
        <span className="title">Title</span>
        <p className="description">{appli.title}</p>
        <div className="DescButton" style={{display:'flex',
    height: 'fit-content',
    flexDirection: 'column',
    alignItems: 'baseline'}}>
          <Button
            style={{ background: "black", height: "fit-content" }}
            onClick={() => setOpen(!open)}
            aria-controls="ApplicationHandle-collapse-text"
            aria-expanded={open}
          >
            Description
          </Button>
          <Collapse in={open}>
            <div id="ApplicationHandle-collapse-text">{appli.body}</div>
          </Collapse>
          {/* {const statusClassName = statusParts[0].trim().startsWith("accepted") ? 'bg-success' : 'bg-primary';} */}
          <span className="badge text-bg-dark AlingPostFooterDate">
            {TimeDiffer}D
          </span>
          {/* <div className='status'></div> */}
          <span
            className={`description text-light ${statusClassName}`}
            style={{ borderRadius: "3px" }}
          >
            {statusParts[0]}
          </span>
          <span className="description">{statusParts[1]}</span>

          <button className="reject" onClick={() => handleOnReject(appli._id)}>
            Delete
          </button>
          
          {/* <button onClick={handleError}>Chesk</button> */}
          {ExtraFeature}
          <ReviewPopUp trigger={popup} closePopUp={() => setPopup(false)}>
          {/* <p>Review this and delete</p> */}
          <StarRating title={appli.title} createrId={appli.createrId} handlerId={appli.handlerId} status={appli.status} subject={appli.body} idfor={appli._id} setPopup={setPopup} fetchData={fetchApplication} type={"application"}/>
        </ReviewPopUp>
        </div>
      </div>
    </>
  );
}

export default StudentApplicationCard;
