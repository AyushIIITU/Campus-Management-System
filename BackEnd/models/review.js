const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    createrId:{ type : mongoose.Schema.Types.ObjectId, required: true, ref:"Student" }, // user who created the Application
    handlerId:{type:mongoose.Schema.Types.ObjectId,ref:"Admin"}, // the user who is handling this Application
    status:{type:String},
    rating :{ type: Number, min:0, max:5},
    reviewText: String,
    subject: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ReviewDetail = mongoose.model("ReviewDetail", ReviewSchema);

module.exports = ReviewDetail;
