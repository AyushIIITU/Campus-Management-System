import React from 'react';
import style from './StarsShow.module.css';

function StarsShow({ stars, id }) {
  console.log(stars);
  return (
    <div className={style.rating} id={`${id}`}>
      {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          <input
            value={`${value}`}
            name="rate"
            id={style[`star${value}`]} // Access the CSS class name correctly using template literals
            type="radio"
            checked={value === stars} // Check if the value matches the stars prop
            readOnly // Add readOnly attribute since it's a read-only field
          />
          <label title="text" htmlFor={`star${value}`}></label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default StarsShow;
