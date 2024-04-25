import React from "react";
// import ApplicationHandle from './ApplicationHandle'
import toast from "react-hot-toast";
import axios from "axios";
import { Button, Collapse } from "react-bootstrap";
import "./ApplicationHandle.css";
function ApplicationProvider() {
  const [open, setOpen] = React.useState(false);
  const [applications, setApplications] = React.useState([]);
  const refMessage = React.useRef();
  //null admin :6623c45130273c48020063b2
  const fetchApplication = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/application/applicationToAdmin/${localStorage.getItem(
          "AdminId"
        )}`
      );
      if (response.status == 404) {
        return () => {
          console.log("No Data Found");
          setApplications([]);
        };
      } else {
        console.log(response.data);
        setApplications(response.data);
      }
      // setApplications(response.data);
      // console.log(response.data);
    } catch (err) {
      if (err.response.status == 404) {
        return () => {
          toast.error("Error: No data found");
          setApplications([]);
        };
      }
      console.log("Error in getin appli ation", err.message);
    }
  };
  const handleOnAccept = async (AppliacionId) => {
    try {
      console.log(refMessage.current.value);
      const response = await axios.put(
        `http://localhost:3000/application/${AppliacionId}`,
        {
          status: `Accepted by ${localStorage.getItem("AdminName")}: ${
            refMessage.current.value
          }`,
          handlerId: null,
        }
      );
      if (response.status == 201) toast.success("Task is Accepted Succesfully");
      fetchApplication();
    } catch (err) {
      toast.error("Error in applicaion Try to refreash page or TryLater", err);
      console.error("error from admin:", err);
    }
  };
  const handleOnReject = async (AppliacionId) => {
    try {
      console.log(refMessage.current.value);
      const response = await axios.put(
        `http://localhost:3000/application/${AppliacionId}`,
        {
          status: `Rejected by ${localStorage.getItem("AdminName")}: ${
            refMessage.current.value
          }`,
          handlerId: null,
        }
      );
      if (response.status == 201) toast.success("Task is Accepted Succesfully");
      fetchApplication();
    } catch (err) {
      toast.error("Error in applicaion Try to refreash page or trylater", err);
      console.error("error from admin:", err);
    }
  };

  React.useEffect(() => {
    // Get the list of applications on mount
    fetchApplication();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {applications.map((appli) => (
        <div
          key={appli._id}
          style={{
            display: appli.status.split(" ")[0] === "Pending" ? "flex" : "none",
          }}
        >
          <div className="cookie-card" style={{ width: "25vh", margin: "1vh" }}>
            <span className="title">From</span>
            <p className="description">{appli.createrId.name}</p>
            <br />
            <p className="description">{appli.createrId.email} </p>
            <br />
            <p className="description">{appli.createrId.phone}</p>
            <br />
            <span className="title">Subject</span>
            <p className="description">{appli.subject} </p>
            <br />
            <span className="title">Title</span>
            <p className="description">{appli.title}</p>
            <div className="DescButton">
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
            </div>
            <input
              type="text"
              placeholder="Write here..."
              name="text"
              className="inputM"
              ref={refMessage}
            />
            <div className="actions">
              <button
                className="accept"
                onClick={() => handleOnAccept(appli._id)}
              >
                Accept
              </button>

              <button
                className="reject"
                onClick={() => handleOnReject(appli._id)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicationProvider;
