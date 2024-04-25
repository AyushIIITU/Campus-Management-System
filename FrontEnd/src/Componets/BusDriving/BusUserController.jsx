import { useContext, useEffect } from 'react'
import DriverContext from '../../Context/DriverContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BusDriving from './BusDriving';

function BusUserController() {
    const nevigat=useNavigate()
    const {setDriver}=useContext(DriverContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                
                const response = await axios.get("http://localhost:3000/driver/profile", {
                    headers: {
                            Authorization: `Bearer ${token}`
                            
                    }
                });
                console.log(response.data);
                setDriver([response.data.userName,response.data.phoneNumber]);
                

                // setGardDetail(response.data);
                
            }
            catch (err) {
                console.log("Error", err.response.status);
                if(err.response.status === 401){
                    localStorage.removeItem('token');
                    nevigat("/DriverLogin");
                }
            }
        }
        fetchData();
    },[]);
    return (
        <>
        <BusDriving></BusDriving>
        </>
    )
}

export default BusUserController