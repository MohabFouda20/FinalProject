const express = require("express");
const router = express.Router();
const adminRegisterValidator = require("../validations/adminValidation");
const AdminController = require("../controllers/adminController");
const menuController = require('../controllers/menuController')


router.post(
  "/register",
  adminRegisterValidator(),
  AdminController.adminRegister
);
router.post("/login", AdminController.adminLogin);
router.get("/", AdminController.getAllAdmins);
router
  .route("/:id")
  .patch(AdminController.editAdmin)
  .delete(AdminController.deleteAdmin)
  .get(AdminController.getSingleAdmin);
router.post('/menu',menuController.AddItem)
router.route('/menu/:id').patch(menuController.editItem).delete(menuController.deleteItem)

module.exports = router;
