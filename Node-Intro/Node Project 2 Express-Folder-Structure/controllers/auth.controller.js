export const login = (req, res) => {
  try {
    const data = req.body;
    res.json({
      message: "This is the Controller File!",
      Data: data,W
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
