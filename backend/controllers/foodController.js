import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add Food Item
const addFoodItem = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Item Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error In Adding Food Item" });
  }
};

// All food list
const foodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, message: "Food list fetched", data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in fetching food list" });
  }
};

// Remove Food Item
const removeFoodItem = async (req, res) => {
  try {
    const foodItem = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${foodItem.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to delete food item" });
  }
};

export { addFoodItem, foodList, removeFoodItem };
