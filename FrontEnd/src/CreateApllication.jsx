import React, { useRef } from "react";
import styles from "./CreateApllication.module.css";
import toast from 'react-hot-toast';
import AppliactionSvg from './Svg/AppliactionForm.svg'
import axios from "axios";

function CreateApllication() {
  const [selectedMatter, setSelectedMatter] = React.useState("AcademicsMatters");
  
  const refTitle=useRef();
  const refBody=useRef();

  const MatterToHandelrList = {
    "AcademicsMatters": ["Mr.Lakhvinder Singh (Batch 2023-27)", "Mr. Sukh Sagar (Batch 2022-26)", "Mr. Ashwani Kumar (Batch 2020-24)", "Ms. Shilpa","Dr. Nishtha Hooda"],
    "AdministrativeMatters": ["Ms. Kusum Dhiman", "Mr. Ashwani Kumar", "Dr. Vikram Kumar Associate Dean (Admin)"],
    "MessandHostelMatters":["Mr. Goldy (Hostel Assistant)", "Mr. Manoj (Hostel Assistant)","Mr. Hariom Hostel Assistant","Hostel Warden Boys","Hostel Warden Girls"],
    "FeeandOtherRelatedIssues":["Mr. Rajesh Kumar","Sh. R. K. Verma Consultant (Fin.)","Sh. Uttam Patial Consultant (Audit)"],
    "TrainingPlacementInternship": ["Dr.Naman Garg"],
    "Scholarship":["Dr. Ankur Kumar","Dr. Shivdutt Sharma"],
    "SportsandOutdoorActivities": ["Dr. Ankur Kumar","Dr. Naveen"],
    "CivilandElectricalWorks": ["Mr. Deepak(Civil)","Mr. Rahul (Civil)","Mr. Nitin Dhillon (Electrical)","Mr. Ayush Sharma (Civil)"],
    "ICT": ["Mr. Rohit Sharma","Mr. Avinash","Mr. Paramjeet","Mr. Nitin Kumar" ,"Dr. Vikram Kumar ICT In-charge"],
    "Admission": ["Dr. Shatrughan Modi"]
  };
  const HandlerID = {
    "Director": "660e9077117805cb4a95d7d6",
    "Hostel Warden Boys": "660e9055117805cb4a95d7d0",
    "Mr. Goldy (Hostel Assistant)": "660e9020117805cb4a95d7cd",
    "Mr. Sukh Sagar (Batch 2022-26)": "6618fa03d49ed5a61975f3fc",
    "Mr. Deepak(Civil)": "6619095bd49ed5a61975f3ff",
    "Dr. Vikram Kumar Associate Dean (Admin)": "660e906a117805cb4a95d7d3",
    "Mr. Manoj (Hostel Assistant)":"662577f949e7ca9e2e4b506f"
  };
  const [selectedHandler, setSelectedHandler] = React.useState(MatterToHandelrList[selectedMatter][0]);
  const handleSelectChange = (event) => {
    setSelectedMatter(event.target.value);
    setSelectedHandler(MatterToHandelrList[event.target.value][0])
    // console.log(MatterToHandelrList[event.target.value], MatterToHandelrList[event.target.value][0]);
  };

  const handleSelectHandler = (event) => {
    setSelectedHandler(event.target.value);
    console.log(event.target.value)
    
  };
  const handleApplicationSubmit=async(e)=>{
    e.preventDefault();
    const Title=refTitle.current.value;
    const Body=refBody.current.value;

    if(!Title||!Body){
        toast('All fields are required', {
            icon: '⚠️',
          });
        }
    else{
      try {
        const payload={
          createrId:localStorage.getItem(`StudentId`),
          subject: selectedMatter,
          handlerId:HandlerID[selectedHandler],
          title:Title,
          body:Body
        }
        console.log(payload);
        const response=await axios.post("http://localhost:3000/application",payload);
        if(response.status==200){
          toast.success("Application is Sent SuccesFully");
        }
      } catch (err) {
        toast.error(`Error Occured ${err.message}`);
      }
        }

  }
  const handleCheck=()=>{
    console.log(selectedHandler,"   ",selectedMatter," ",HandlerID[selectedHandler])
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.postcard}>
        <div className={styles.letter}>
          <form onSubmit={handleApplicationSubmit} className={styles.message_form}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Subject
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={selectedMatter}
                onChange={handleSelectChange}
              >
                <option value="AcademicsMatters">Academics Matters</option>
                <option value="AdministrativeMatters">Administrative Matters</option>
                <option value="MessandHostelMatters">Mess and Hostel Matters</option>
                <option value="FeeandOtherRelatedIssues">Fee and Other Related Issues</option>
                <option value="TrainingPlacementInternship">Training Placement,Internship</option>
                <option value="Scholarship">Scholarship</option>
                <option value="SportsandOutdoorActivities">Sports and Outdoor Activities</option>
                <option value="CivilandElectricalWorks">Civil and Electrical Works</option>
                <option value="ICT">ICT</option>
                <option value="Admission">Admission</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Handed To:
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect02"
                value={selectedHandler}
                onChange={handleSelectHandler}
              >
                {MatterToHandelrList[selectedMatter].map((handler, index) => (
                  <option key={index} value={handler}>{handler}</option>
                ))}
              </select>
              
            </div>
            <label htmlFor="title">Title</label>
            <br />
              <input ref={refTitle} type="text" id="title" placeholder="Title"/>
              <br />
            <label htmlFor="message">Body</label>
            <br />
            <textarea
              id="message"
              name="message_to_recipient"
              placeholder="Body of Letter"
              ref={refBody}
            />
            <button type="submit" className={styles.btn}> Button
</button>
            {/* <button type="submit">Submit</button> */}
          </form>
        </div>

        <div className={styles.address}>
            <div className={styles.svgBackGroundForApplication} style={{backgroundImage:`url(${AppliactionSvg})`}}></div>
          
          {/* <form action="#" method="post" className={styles.message_form}>
            <input
              type="email"
              id="recipient_email"
              name="recipient_email"
              placeholder="recipient's e-mail"
            />
          </form> */}

        </div>
      </div>
    </div>
  );
}

export default CreateApllication;
