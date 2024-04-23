import React, { useState } from "react";
import style from "./Rating.module.css"; // Import the CSS module
import toast from "react-hot-toast";
import axios from "axios";

function StarRating({
  title,
  createrId,
  handlerId,
  status,
  subject,
  idfor,
  setPopup,
  fetchData,
  type
}) {
  const [rating, setRating] = useState(0);
  const refReview = React.useRef();

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReview = async () => {
    if (!refReview.current.value) {
      return toast.error("Please write a review");
    } else {
      let data = {
        title: title,
        createrId: createrId,
        handlerId: handlerId,
        status: status,
        reviewText: refReview.current.value,
        rating: 6-rating,
        subject: subject,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/reviews",
          data
        );

        console.log(response.data);
        toast.success("Your Review has been submitted");
        console.log(`http://localhost:3000/${type}/${idfor}`);
        const response2 = await axios.delete(
          `http://localhost:3000/${type}/${idfor}`
        );
        console.log(response2.data);
        toast.success("The complain is now closed.");

        setPopup(false);
        fetchData();
      } catch (er) {
        console.error("Error in Submitting Review", er);
      }
    }
  };

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Rate This Matter
      </h2>
      <br />
      <div className={style.rating}>
        {" "}
        {/* Use the CSS module class */}
        {[1, 2, 3, 4, 5].map((value) => (
          <React.Fragment key={value}>
            <input
              type="radio"
              id={`star-${value}`}
              name="star-radio"
              value={`star-${value}`}
              checked={rating === value}
              onChange={() => handleRatingChange(value)}
            />
            <label htmlFor={`star-${value}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
            </label>
            {console.log(rating)}
          </React.Fragment>
        ))}
      </div>
      <div className={style["form-group"]}>
        <label htmlFor="textarea">Review</label>
        <textarea
          ref={refReview}
          required=""
          cols="50"
          rows="10"
          id="textarea"
          name="textarea"
        ></textarea>
      </div>
      {/* <input
        type="text"
        className="input"
        ref={refReview}
        placeholder="khuch to likho"
      /> */}
      <button className={style["button"]} type="submit" onClick={handleReview}>
        <div className={style["svg-wrapper-1"]}>
          <div className={style["svg-wrapper"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Submit Rating</span>
      </button>
      {/* <button type="submit" onClick={handleReview}>
        Submit Rating
      </button> */}
    </>
  );
}

export default StarRating;
