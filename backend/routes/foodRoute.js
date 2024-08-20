import express from "express";
import multer from "multer";
import {
  addFoodItem,
  foodList,
  removeFoodItem,
} from "../controllers/foodController.js";

// Express router
const foodRouter = express.Router();

// Image storage engine
const storageConfig = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storageConfig });

foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/list", foodList);
foodRouter.post("/remove", removeFoodItem);

export default foodRouter;
