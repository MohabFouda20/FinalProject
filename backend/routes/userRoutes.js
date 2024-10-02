const express = require("express");
const router = express.Router();
const validation = require("../validations/userValidator");
const userController = require("../controllers/userController");

router.post("/register", userController.userRegister);
router.post("/login", userController.userlogin);

router
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.editUser)
  .delete(userController.deleteUser);
router.route("/").get(userController.getAllUsers);

module.exports = router;
