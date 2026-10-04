import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true, minlength: 10, maxLength: 300 },
});

export const Blog = mongoose.model("blog", blogSchema);
