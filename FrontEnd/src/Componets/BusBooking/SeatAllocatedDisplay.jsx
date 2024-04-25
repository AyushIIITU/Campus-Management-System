import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

const SeatAllocatedDisplay = ({ userDetails }) => {
  return (
    <>
      <div className="container table-responsive py-5">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ padding: 0 }}><MdAirlineSeatReclineNormal /></th>
              <th scope="col" style={{ padding: 0 }}><BiUserCircle /></th>
              <th scope="col" style={{ padding: 0 }}><FaPhoneAlt /></th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user) => (
              <tr key={user._id}>
                <th scope="row" style={{ padding: 0 }}>{user.seatNo}</th>
                <td style={{ padding: 0 }}>{user.name}</td>
                <td style={{ padding: 0 }}>{user.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeatAllocatedDisplay;
