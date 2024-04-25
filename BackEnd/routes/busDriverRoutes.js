const express = require('express');
const router = express.Router();
const busDriverDetail = require('./../models/busDriver');
const { generateToken, jwtAuthMiddleware } = require('../jwt');

// POST Method to add a Menu Item
router.post('/', async (req, res) =>{
    try{
        const data = req.body
        const newDriver = new busDriverDetail(data);
        const response = await newDriver.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// GET method to get the Menu Items
router.get('/',jwtAuthMiddleware, async (req, res) =>{
    try{
        const data = await busDriverDetail.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.delete('/:id', async (req, res) => {
    try{
        const driverId = req.params.id; // Extract the User ID freom the URL parameter
        
        // Assuming you have a busDriverDetail model
        const response = await busDriverDetail.findByIdAndDelete(driverId);
        if (!response) {
            return res.status(404).json({ error: 'Driver is not found' });
        }
        console.log('data delete');
        res.status(200).json({message: 'Driver is Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.post("/login", async (req, res) => {
    try {
        const { userName, phoneNo } = req.body;
        const existingUser = await busDriverDetail.findOne({ userName: userName,phoneNo:phoneNo })  ;
        console.log(existingUser);
        if (!existingUser) {
            return res.status(409).json({ error: "User is not Registered!" });
        }
        const payload={
            userName:existingUser.userName,
            phoneNo:existingUser.phoneNo,
        }
        
        const token = generateToken(payload);
        return res.json({ token });
    }
    catch (err) {
        console.log("Error:", err);
    }
});
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        // Extract user data from the request object
        const userData = req.user;
        
        // Extract username and phone number from the user data
        const userName = userData.userName;
        const phoneNumber = userData.phoneNo;

        // Send the username and phone number in the response
        res.status(200).json({ userName, phoneNumber });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/driverLoggedIn/:id', async (req, res) =>{
    try {
        const driverId = req.params.id; // Extract the driver ID from the URL parameter
        const driver = await busDriverDetail.findById(driverId); // Find the machine by its ID
        
        if (!driver) {
            return res.status(404).json({message: 'Driver is not found'});
        }

        // Assuming extendTime is in milliseconds, you might need to parse it to an integer
   

       

        // driver.isLogged=true; // Extend the time
        await driver.save(); // Save the updated driver

        console.log('Driver Logged In');
        res.status(200).json({message: 'Driver Is Logged In successfully', driver});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.put('/driverLoggedOut/:id', async (req, res) =>{
    try {
        const driverId = req.params.id; // Extract the driver ID from the URL parameter
        const driver = await busDriverDetail.findById(driverId); // Find the machine by its ID
        

        if (!driver) {
            return res.status(404).json({message: 'Driver is not found'});
        }

        // Assuming extendTime is in milliseconds, you might need to parse it to an integer
   

       

        // driver.isLogged=false; // Extend the time
        await driver.save(); // Save the updated driver

        console.log('Driver Logged Out');
        res.status(200).json({message: 'Machine time extended successfully', driver});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// comment added for testing purposes
module.exports = router;