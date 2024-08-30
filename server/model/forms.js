import mongoose from "mongoose";


const Schema = mongoose.Schema;

const formSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  viesbutis: {
    type: String,
    required: true,
  },

}, {timestamps:true});


export const Form = mongoose.model("Form", formSchema);
