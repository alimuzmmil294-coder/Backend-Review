import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    
    const token = req?.headers?.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
      return res.status(401).json({
        message: "You are not authenticated",
        success: false,
      });

      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: error.message || "Internal server error!",
      success: false,
    });
  }
};
