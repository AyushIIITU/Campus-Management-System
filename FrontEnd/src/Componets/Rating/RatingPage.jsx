import React from 'react'
import RatingPost from "./RatingPost.jsx"
import axios from 'axios';
import style from './RatingPage.module.css'
function RatingPage() {
    const [post, setPost] = React.useState([]);
    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/reviews`);
          
          setPost(response.data);
        //   console.log(response.data);
        } catch (err) {
          if(err.response.status==404){
            setPost([]);
          }else{
            console.error("Error in Getting Public Posts ", err);
          }
          
        }
      };
      React.useEffect(() => {
        fetchData();
      }, []);
  return (
    <>
    <h1><span className={style.text1}>Review Page</span></h1>
    <div>
    <div className={style.alingbox}>
    {post.map((rate)=>(
        <RatingPost post={rate} fetchData={fetchData}/>
       
    ))}
    
    {/* <RatingPost/> */}
    </div></div>
    </>

  )
}

export default RatingPage