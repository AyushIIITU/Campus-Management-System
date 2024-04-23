const express = require('express');
const router = express.Router();
const ApplicationDetail = require('./../models/application')

// POST Method to add a Application User
router.post('/', async (req, res) =>{
    try{
        const data = req.body
        const newComplain = new ApplicationDetail(data);
        const response = await newComplain.save();
        console.log('Application User Added saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error:Application'});
    }
})
router.get('/',async(req,res)=>{
    try {
        const allApplicationUser=await ApplicationDetail.find();
        if(allApplicationUser.length === 0 ) res.status(404).json("No Data Found");
        else res.status(200).json(allApplicationUser);
    } catch (err) {
        console.log("Error in Getting Application",err);
        res.status(500).json({error: 'Internal Server Error:Application'});
    }
})
router.get('/applicationToAdmin/:adminHandle',async(req,res)=>{
    try {
        const AdminHandle = req.params.adminHandle;
        const AdminHand = await ApplicationDetail.find({handlerId:AdminHandle}).populate({
            path:'createrId',
            select:'-password'
        });
        if(AdminHand.length === 0 ) res.status(404).json([]);
        else res.status(200).json(AdminHand);
    } catch (err) {
        console.log("Error in Getting Application",err);
        res.status(500).json({error: 'Internal Server Error:Application'});
    }
})
router.get('/applicationToStudent/:studentHandle',async(req,res)=>{
    try {
        const StudentHandle = req.params.studentHandle;
        const StudentAppli = await ApplicationDetail.find({createrId:StudentHandle}).populate({
            path:'handlerId',
            select:'-password'
        });
        if(StudentAppli.length === 0 ) res.status(404).json("No Data Found");
        else res.status(200).json(StudentAppli);
    } catch (err) {
        console.log("Error in Getting Application",err);
        res.status(500).json({error: 'Internal Server Error:Application'});
    }
})
router.put('/:applicationId',async(req,res)=>{
    try {
        const  applicationID = req.params.applicationId;
        let updatData = req.body.status;
        const handlerId=req.body.handlerId;
        const updateappl = await ApplicationDetail.findByIdAndUpdate(applicationID,{status:updatData,handlerId:handlerId});
        if(!updateappl) return res.status(404).json('No such Application Exists');
        res.status(201).json({msg:"Status Updated Successfully"});
        // res.status(201).json(updateappl);
        // console.log(updatData,"Updating data")
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})
router.delete("/:id", async (req, res) => {
    const id=req.params.id;
  console.log("kya hua  tha?");
    try{
      const deletedApplicant = await ApplicationDetail.findByIdAndDelete(id);
  
      if (!deletedApplicant) {
        return res.status(404).json({ message: "No user with this id!" });
      }
  
      res.status(200).json({ message: "User has been deleted" });
    }catch(e){
      console.log(e);
      res.status(500).json({ message: e.message });
    }
    
  });
router.put('/esclate/:id',async (req,res)=>{
    try {
        handlerUpdate=req.body.handlerIdToUpdate;
        const id=req.params.id;
        const response=await ApplicationDetail.findByIdAndUpdate(id,{handlerId:handlerUpdate});
        if(!response){
            return  res.status(404).json({message:"Handler Id is not valid."})
        }else{
           return  res.status(200).json(response);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
})

module.exports = router;