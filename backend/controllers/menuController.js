const Menu = require("../models/menuModel");
const AddItem = async (req, res) => {
  try {
    const itemData = req.body;
    Menu.create(itemData);
    res.status(200).json({ message: "Item added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getItems = async (req, res) => {
  try {
    const items = await Menu.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Menu.findById(id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};
const editItem = async (req, res) => {
  try {
    const id = req.params.id;
    const itemData = req.body;
    await Menu.findByIdAndUpdate(id, itemData);
    res.status(200).json({ message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};
const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await Menu.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  AddItem,
  getItems,
  getSingleItem,
  editItem,
  deleteItem,
};
