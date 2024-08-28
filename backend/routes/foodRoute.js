import { addFood, listFood,removeFood } from "../controllers/foodControllers.js";
import express from "express";
import multer from "multer"


export const foodRouter = express.Router()


//Image Storage engine

const storage = multer.diskStorage({
    destination: "uploads",
     function (req, file, cb) {
      cb(null, `${Date.now()}${file.originalname}`)
    },
  })
  
const upload = multer({ storage: storage })

foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post("/remove",removeFood)