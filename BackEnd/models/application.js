const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    createrId:{ type : mongoose.Schema.Types.ObjectId, required: true, ref:"Student" }, // user who created the Application
    subject: { type: String, required: true },
    handlerId:{type:mongoose.Schema.Types.ObjectId,ref:"Admin"}, // the user who is handling this Application
    title: { type: String, required: true },
    body: { type: String, required: true },
    status:{type:String,default: "Pending"} ,// pending, accepted or rejected
  },
  {
    timestamps: true,
  }
);

const ApplicationDetail = mongoose.model("ApplicationDetail", ApplicationSchema);

module.exports = ApplicationDetail;
