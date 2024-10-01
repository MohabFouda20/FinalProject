const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const adminMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;

    if (!token) {
      throw (error = { message: "Please log in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return res
      .status(403)
      .json({ message: "Invalid or expired token", error: err.message });
  }
};

module.exports = adminMiddleware;
