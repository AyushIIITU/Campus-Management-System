import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./ShowTask.module.css"
function ShowTask() {
  const [taskToResolved, setTaskToResolved] = React.useState([]);
  const refMessages = React.useRef([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/task/taskCreater/${localStorage.getItem(
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

  const handleResolveTask = async (ComplainId, index) => {
    const message = refMessages.current[index].value;
    if (message === "") {
      return toast.error('Please Enter Message');
    } else {
      try {
        await axios.put(`http://localhost:3000/task/taskIsSolved/${ComplainId}`, {
          status: `${localStorage.getItem("AdminName")} : ${message}`,
        });
        toast.success("Task Message is Sent Successfully");
        fetchData();
      } catch (err) {
        toast.error("Error in Getting Data from Server");
      }
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/task/${id}`);
      toast.success("Task Deleted Successfully");
      fetchData();
    } catch (err) {
      toast.error("Error in Deleting Task");
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {taskToResolved.map((Task, index) => (
        <div key={Task._id} className="card CompalinPost" style={{ width: "25vh" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <div className="card__span" style={{ position: "inherit" }}>
              {Task.reciverId.name}
            </div>
            <br />
            <br />
            <span className="card__span" style={{ position: "inherit" }}>
              {Task.reciverId.phone}
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ width: "-webkit-fill-available" }}>
              {Task.title}
            </h5>
            <p className="card-text" style={{ height: "9vh" }}>
              {Task.description}
            </p>
            <div className="AlingPostFooter">
              <span className={`badge text-bg-${Task.deadline / 1000 / 60 / 60 / 24 -
                  (Date.now() - new Date(Task.createdAt).getTime()) /
                  (1000 * 60 * 60 * 24) > 0 ? "success" : "danger"} AlignPostFooterDate`}>
                {(Task.deadline / 1000 / 60 / 60 / 24 -
                  (Date.now() - new Date(Task.createdAt).getTime()) /
                  (1000 * 60 * 60 * 24)).toFixed(1)} Days
              </span>
            </div>
            <div>
              <strong>Status</strong>: {Task.status}
            </div>
            <div className={style.messageBox}>
              <input ref={(element) => (refMessages.current[index] = element)} required="" placeholder="Message..." type="text" id={style.messageInput} />
              <button onClick={() => handleResolveTask(Task._id, index)} id={style.sendButton} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                  <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                </svg>
              </button>
            </div>
            <button onClick={() => handleDeleteTask(Task._id)} type="button" className="btn btn-danger" style={{ marginTop: '5px' }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ShowTask;