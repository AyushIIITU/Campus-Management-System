import React, { useRef, useEffect, useState, useContext } from "react";
import "./QueueDisplay.css";
import { MdDelete } from "react-icons/md";
import GardContext from "../../Context/GardContext";

function QueueDisplay({
  queue,

  
  updateQueueCatalog,
  deleteMachineQueueList,
}) {
  // const [status, setStatus] = useState(false);
  // let TwoMinUser = {
    
  //   atTimeAdded: firstUser.atTimeAdded,
  //   atTimeDelete: firstUser.atTimeAdded + 5000,
  // };
  // useEffect(() => {
  //   if (!status) {
  //     const intervaluserName = setInterval(() => {
  //       if (TwoMinUser.atTimeDelete < new Date().getTime()) {
  //         deleteMachineQueueList(firstUser);
  //       }
  //     }, 1000);
  //     return () => clearInterval(intervaluserName);
  //   }
  // }, [TwoMinUser, deleteMachineQueueList, firstUser]);
  const extendedTimeRef = useRef();
  const {gard}=useContext(GardContext);
  console.log(gard[0]);
  // const timeoutRef = useRef(null);
  const handleExtendSubmit = (event) => {
    event.preventDefault();
    const extendedTime = extendedTimeRef.current.value;
    console.log(extendedTime);
    updateQueueCatalog(extendedTime);
    // Handle the form submission logic here
  };
  const handleDeleteMachineQueueList = (userdelete) => {
    deleteMachineQueueList(userdelete);
  };

  // const handleAcceptRequest = () => {
  //   setStatus(true);
  //   clearTimeout(timeoutRef.current);
  // };

  return (
    <div>
      <h2 className="three">QUEUE</h2>
      <ul>
        {queue.map((user) => (
          <React.Fragment key={user._id} >
            {user.userName === queue[0].userName ? (
              <li className="display-6">
               <strong> User: </strong>{user.userName}, {/* TimeAtAdd:{user.atTimeAdded} , TimeAtDelete:{" "} */}
                {/* {user.atTimeDelete}} */}
                <strong>Room No:</strong>  {user.roomNo}
               <form style={{ display: ((user.userName === localStorage.getItem('StudentName')) || (gard[0] !== undefined)) ? null : 'none' }}
                  className="form-inline extendingform"
                  onSubmit={handleExtendSubmit}
                >
               
                    <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="extendTimer" className="sr-only">
                      ExtendTime
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="extendTimer"
                      ref={extendedTimeRef}
                      placeholder="ExtendTime"
                    />
                
                  <button className="btn btn-primary mb-2">Confirm</button></div>
                </form>
                {/* {!status && (
                  <>
                    <div className="alert alert-danger" role="alert">
                      Please Accept within 2 seconds that you will be removed
                      from Queue if this time is not extended!
                    </div>

                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={handleAcceptRequest}
                    >
                      Accept
                    </button>
                  </>
                )} */}
              </li>
            ) : (
              <li className="display-6">
                 <strong>User: </strong>{user.userName}{/*, TimeAtAdd:{user.atTimeAdded} , TimeAtDelete:
                {user.atTimeDelete},*/} ,<strong>TimeDuration: </strong>
                {Math.floor((user.timeAtDelete - user.timeAtAdded)/3600)}<strong>Min</strong>,
                <strong>Room No:</strong>  {user.roomNo}
              </li>
            )}
            <button style={{ display: ((user.userName === localStorage.getItem('StudentName')) || (gard[0] !== undefined)) ? null : 'none' }}
              type="submit"
              className="btn btn-danger mb-2"
              onClick={() => handleDeleteMachineQueueList(user)}
            >
              Delete
            </button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default QueueDisplay;
