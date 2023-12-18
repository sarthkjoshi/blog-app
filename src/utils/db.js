import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogapp");
  } catch (error) {
    throw new Error("Connection cannot be established");
  }
};
export default connect;
