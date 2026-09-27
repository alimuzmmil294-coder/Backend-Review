import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB connected to: " + conn.connection.host);
  } catch (error) {
    console.error(error.message || "Some thing went wrong in connection");
  }
};
