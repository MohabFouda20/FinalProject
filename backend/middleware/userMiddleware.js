const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");   
dotenv.config();

const userMiddleware = async (req, res, next) => {
    try {
        // Retrieve token from cookies
        let token = req.cookies.jwt;

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: "Please log in" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        // Attach user info to request object if needed
        req.user = decoded;

        // Move to the next middleware or route
        next();

    } catch (err) {
        // Handle token verification failure
        console.error("JWT verification failed:", err);
        return res.status(403).json({ message: "Invalid or expired token", error: err.message });
    }
}

module.exports = userMiddleware;
