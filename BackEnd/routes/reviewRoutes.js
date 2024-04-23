const express = require('express');
const router = express.Router();
const ReviewDetail = require('./../models/review')

// POST Method to add a Review Review
router.post('/', async (req, res) =>{
    try{
        const data = req.body
        const newComplain = new ReviewDetail(data);
        const response = await newComplain.save();
        console.log('Review Review Added saved');
       return  res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: 'Internal Server Error:Review'});
    }
})
router.get('/', async (req, res) => {
  try {
      const allReviewReview = await ReviewDetail.find().populate([
          {
              path: 'handlerId',
              select: '-password'
          },
          {
              path: 'createrId',
              select: '-password'
          }
      ]);
      if (allReviewReview.length === 0) return res.status(404).json({ message: "No Data Found" });
      else return res.status(200).json(allReviewReview);
  } catch (err) {
      console.log("Error in Getting Review", err);
      res.status(500).json({ error: 'Internal Server Error: Review' });
  }
})


// router.get('/applicationToStudent/:studentHandle',async(req,res)=>{
//     try {
//         const StudentHandle = req.params.studentHandle;
//         const StudentAppli = await ReviewDetail.find({createrId:StudentHandle})/*.populate({
//             path:'handlerId',
//             select:'-password'
//         });*/
//         if(StudentAppli.length === 0 ) res.status(404).json("No Data Found");
//         else res.status(200).json(StudentAppli);
//     } catch (err) {
//         console.log("Error in Getting Review",err);
//         res.status(500).json({error: 'Internal Server Error:Review'});
//     }
// })
// router.put('/:applicationId',async(req,res)=>{
//     try {
//         const  applicationID = req.params.applicationId;
//         let updatData = req.body.status;
//         const handlerId=req.body.handlerId;
//         const updateappl = await ReviewDetail.findByIdAndUpdate(applicationID,{status:updatData,handlerId:handlerId});
//         if(!updateappl) return res.status(404).json('No such Review Exists');
//         res.status(201).json({msg:"Status Updated Successfully"});
//         // res.status(201).json(updateappl);
//         // console.log(updatData,"Updating data")
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server error");
//     }
// })
router.delete("/:id", async (req, res) => {
    const id=req.params.id;
  
    try{
      const deletedApplicant = await ReviewDetail.findByIdAndDelete(id);
  
      if (!deletedApplicant) {
        return res.status(404).json({ message: "No user with this id!" });
      }
  
      return res.status(200).json({ message: "Review has been deleted" });
    }catch(e){
      console.log(e);
      return res.status(500).json({ message: e.message });
    }
    
  });
module.exports = router;