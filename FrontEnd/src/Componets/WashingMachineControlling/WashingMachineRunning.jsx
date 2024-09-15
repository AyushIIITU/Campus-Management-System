import WashingMachineRunningGif from "../../Video/automatic-washer.mp4"
const Running=()=>{
    return(
       
        <video loading="lazy" muted="muted" src={WashingMachineRunningGif} type="video/mp4" autoPlay="autoplay" loop="loop" ></video>
    )
}
export default Running