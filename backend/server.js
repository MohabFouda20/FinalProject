const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const menuRoutes = require("./routes/menuRoutes");
const dotenv = require("dotenv");
const userMiddleware = require("./middleware/userMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const app = express();
dotenv.config();
const port = process.env.port;
const cors = require("cors");

app.options('*', cors());
app.use(cors({ origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.listen(port, () => {
  console.log("server is running");
});
mongoose.connect(process.env.dbconnection);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("database connection established");
});
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/menu", menuRoutes);
