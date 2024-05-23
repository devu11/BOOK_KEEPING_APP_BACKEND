import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true,
  }
);


const  Book = mongoose.model("Book",bookSchema)
export default Book;
