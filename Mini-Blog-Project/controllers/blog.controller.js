import { Blog } from "../modals/blog.modal.js";
import slugify from "slugify";

// API to create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const slug = slugify(title, { lower: true });
    const findBlog = await Blog.findOne({ title });
    if (findBlog) {
      return res.status(400).json({
        message: "Blog already exists",
        success: false,
      });
    }
    const newBlog = await Blog.create({
      title,
      slug: slug,
      content,
    });
    res.status(201).json({
      message: "Blog created successfully",
      success: true,
      data: newBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export const allBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export const singleBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};
export const deleteBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};
