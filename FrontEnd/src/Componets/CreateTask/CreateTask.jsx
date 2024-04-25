import React from "react";
import style from "./CreateTask.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import Clock from "./Clock";
import { FcClock } from "react-icons/fc";
function CreateTask() {
 
  const [selectedHandler, setSelectedHandler] =
    React.useState("Mr. Sukh Sagar");
  const refTitle = React.useRef();
  const refDesc = React.useRef();
  const refDeadLine = React.useRef();
  const handleSelectHandler = (event) => {
    setSelectedHandler(event.target.value);
  };
  const HandlerList = [
    "Director",
    "Warden",
    "Attendent",
    "Mr. Sukh Sagar",
    "Civil",
    "Dean",
  ];
  const HandlerID = {
    "Director": "660e9077117805cb4a95d7d6",
    "Warden": "660e9055117805cb4a95d7d0",
    "Attendent": "660e9020117805cb4a95d7cd",
    "Mr. Sukh Sagar": "6618fa03d49ed5a61975f3fc",
    "Civil": "6619095bd49ed5a61975f3ff",
    "Dean": "660e906a117805cb4a95d7d3",
  };
  const handleTaskForm = async (e) => {
    e.preventDefault();
    const title = refTitle.current.value;
    const description = refDesc.current.value;
    const deadline = refDeadLine.current.value;
    try {
      const response = await axios.post("http://localhost:3000/task/", {
        title: title,
        description: description,
        createrId: localStorage.getItem("AdminId"),
        reciverId: HandlerID[selectedHandler],
        deadline: parseInt(deadline)*(1000 * 60 * 60 * 24),
      });
      if (response.status == 200) {
        toast.success("Task is created Succesfully:)");
      }
    } catch (err) {
      toast.error(`Error Occured ${err.message}`);
    }
  };
  return (
    <div
      style={{
        display: " flex",
        justifyContent: "center",
        marginTop: "20vh",
      }}
    >
      
      <form className={style.form} onSubmit={handleTaskForm}>
      
        <div className={style.title}>Task Creation<FcClock /></div>
        <select
          className="custom-select"
          id="inputGroupSelect02"
          value={selectedHandler}
          onChange={handleSelectHandler}
        >
          {HandlerList.map((handler, index) => (
            <option key={index} value={handler}>
              {handler}
            </option>
          ))}
        </select>
        <input type="text" ref={refTitle} placeholder="Title of Tasks" required="required" />
        <textarea placeholder="Your message" ref={refDesc} required="required"/>
        <input type="number" placeholder="DeadLine in Days" ref={refDeadLine} required="required" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateTask;
