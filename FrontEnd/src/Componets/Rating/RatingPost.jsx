import { useState, useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";
// import StarsShow from "./StarsShow";
import toast from "react-hot-toast";
import axios from "axios";
// import style from "./StarsShow.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
function RatingPost({ post,fetchData }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [selectedStar, setSelectedStar] = useState(0);
  const starElement =
    selectedStar === 1 ? (
      <div>
        <FaStar style={{ color: "yellow" }} />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    ) : selectedStar === 2 ? (
      <div>
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
    ) : selectedStar === 3 ? (
      <div>
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaRegStar />
        <FaRegStar />
      </div>
    ) : selectedStar === 4 ? (
      <div>
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaRegStar />
      </div>
    ) : (
      <div>
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "yellow" }} />
      </div>
    );

  useEffect(() => {
    setSelectedStar(post.rating);
  }, [post.rating]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/reviews/${id}`);
      if (!response) throw new Error("Error deleting review");
      else {
        // console.log(response);
        toast.success("Review Deleted Successfully!");
        fetchData();
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };
  const find = () => {
    console.log(selectedStar);
  };
  return (
    <>
      <div
        className="cookie-card"
        key={`${post._id}`}
        style={{ width: "25vh", margin: "1vh" }}
      >
        <Button
          style={{ background: "black", height: "fit-content" }}
          onClick={() => setOpen1(!open1)}
          aria-controls="ApplicationHandle-collapse-text"
          aria-expanded={open1}
        >
          <span className="title text-light">Name: </span>
          <p className="description text-light">{post.createrId.name}</p>
        </Button>
        <Collapse in={open1}>
          <div id="ApplicationHandle-collapse-text">
            <center>
              <span className="title">PhoneNo:</span>
              <p className="description">{post.createrId.phone} </p>
              <span className="title">RoomNo:</span>
              <p className="description">{post.createrId.roomNo} </p>
              <span className="title">Email:</span>
              <p className="description">{post.createrId.email} </p>
            </center>
          </div>
        </Collapse>
        <Button
          style={{ background: "black", textWrap: "nowrap" }}
          onClick={() => setOpen2(!open2)}
          aria-controls="ApplicationHandle-collapse-text"
          aria-expanded={open2}
        >
          {post.handlerId.name}
        </Button>
        <Collapse in={open2}>
          <div id="ApplicationHandle-collapse-text">
            <center>
              <span className="title">PhoneNo:</span>
              <p className="description">{post.handlerId.phone}</p>
              <br />
              <span className="title">Email:</span>
              <p className="description">{post.handlerId.email}</p>
            </center>
          </div>
        </Collapse>
        <span className="title">Title: </span>
        <p className="description">{post.title}</p>
        <br />
        <span className="title">Status: </span>
        <p className="description">{post.status}</p>
        <br />
        <Button
          style={{ background: "black", height: "fit-content" }}
          onClick={() => setOpen3(!open3)}
          aria-controls="ApplicationHandle-collapse-text"
          aria-expanded={open3}
        >
          Description of Matter
        </Button>
        <Collapse in={open3}>
          <div id="ApplicationHandle-collapse-text">{post.subject}</div>
        </Collapse>
        <center>{starElement}</center>
        <center>
          <div className="card border border-warning">{post.reviewText}</div></center>
          {/* <Button
            style={{ background: "black", height: "fit-content" }}
            onClick={() => setOpen4(!open4)}
            aria-controls="ApplicationHandle-collapse-text"
            aria-expanded={open4}
          >
            Review Message
          </Button>
        </center>
        <Collapse in={open4}>
          <div id="ApplicationHandle-collapse-text">{post.reviewText}</div>
        </Collapse> */}
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(post._id)} // Pass post id to handleDelete function
        >
          Delete
        </button>
        {/* <button onClick={find}>error</button> */}
        <div></div>
      </div>
    </>
  );
}

export default RatingPost;
