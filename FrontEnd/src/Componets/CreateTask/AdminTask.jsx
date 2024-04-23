import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

function AdminTask() {
  const [taskToResolved, setTaskToResolved] = React.useState([]);
  const refMessage=React.useRef();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/task/taskHandler/${localStorage.getItem(
          "AdminId"
        )}`
      );
      setTaskToResolved(response.data);
    } catch (err) {
      console.error("Error in Getting ", err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const handleResolveTask = async (ComplainId) => {
    try {
      await axios.put(`http://localhost:3000/task/taskIsSolved/${ComplainId}`, {
     
        status: `${localStorage.getItem("AdminName")} : ${refMessage.current.value}`,
      });
      toast.success("Task Message is Sent Successfully");
      fetchData();
    } catch (err) {
      toast.error("Error in Getting  Data from  Server");
    }
  };
  return (
    <div style={{ display: "flex", "flexWrap": "wrap" }}>
      {taskToResolved.map((Task) => (
        <div
          key={Task._id}
          className="card CompalinPost"
          style={{ width: "25vh" }}
        >
          <div
            style={{
              "display": " flex",
              "alignItems": "center",
              "justifyContent": "space-around",
            }}
          >
            <div className="card__span" style={{ position: "inherit" }}>
              {Task.createrId.name}
            </div>
            <br />
            <br />
            <span className="card__span" style={{ position: "inherit" }}>
              {Task.createrId.phone}
            </span>
          </div>
          {/* <br /> */}
          {/* <div className="card__span">{Task.phoneNo}</div> */}
          {/* <br /> */}
          <div className="card-body">
            <h5 className="card-title" style={{ width: "max-content" }}>
              {Task.title}
            </h5>
            <p className="card-text" style={{ height: "9vh" }}>
              {Task.description}
            </p>
            <div className="AlingPostFooter">
              <div style={{ display: "flex" }}>
              

              </div>
              <span className={`badge text-bg-${((Task.deadline / 1000 / 60 / 60 / 24) - ((Date.now() - new Date(Task.createdAt).getTime()) / (1000 * 60 * 60 * 24))) > 0 ? 'success' : 'danger'} AlignPostFooterDate`}>
  {((Task.deadline / 1000 / 60 / 60 / 24) - ((Date.now() - new Date(Task.createdAt).getTime()) / (1000 * 60 * 60 * 24))).toFixed(1)} Days
</span>




            </div>
            <div>
              <strong>Status</strong>: {Task.status}
            </div>
                {/* <div>
                <strong>Handler</strong>: {Task.complainHandler}
                </div> */}
                <input  style={{width: '-webkit-fill-available'}} type='text'  ref={refMessage} placeholder="Enter Message"/>
            <button
              onClick={() => handleResolveTask(Task._id)}
              type="button"
              className="btn btn-info"
            >
              Sent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminTask;
