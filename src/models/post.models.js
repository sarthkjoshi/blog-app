import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,

  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
