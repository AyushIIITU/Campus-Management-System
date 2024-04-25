const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const cors=require("cors");

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;
app.use(cors());
const adminRoute=require('./routes/adminRoutes');
const studentRoute=require('./routes/studentRoutes');
const complainRoute=require('./routes/complainRoutes');
const complainScheduler=require('./complainSchedule');
const busRoute=require('./routes/busRoutes');
const taskRoute=require('./routes/taskRoutes');
const gardRoutes = require('./routes/gardRoutes');
const machineRoutes = require('./routes/machineRoutes');
const applicationRoutes=require('./routes/applicationRoutes');
const reviewRoutes=require('./routes/reviewRoutes');
const driver=require('./routes/busDriverRoutes');
// complainScheduler;
app.use('/admin',adminRoute);
app.use('/student',studentRoute);
app.use('/bus',busRoute);
app.use('/complain',complainRoute);   
app.use('/task',taskRoute); 
app.use('/gard', gardRoutes);
app.use('/driver',driver);
app.use('/machine', machineRoutes);
app.use('/application',applicationRoutes);
app.use('/reviews',reviewRoutes);

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})