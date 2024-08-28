import { foodModel } from "../models/foodModels.js";
import fs from "fs"




//add food item

export const addFood = async (req,res) =>{

    let image_filename = `${req.file.filename}` // Extracting the uploaded image filename from the request and storing it.

    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        image : image_filename,
        category : req.body.category,
    })
    try {
        await food.save() // Saving the new food item to the MongoDB database
        res.json({success:true , message : "Food added"}) //Sending a success response if the food item is saved successfully
        
    } catch (error) {
        res.json({success:false , message : "Error"}) // Sending an error response if there is an issue saving the food item
    }

}

//all food list

export const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({}) // Retrieving all food items from the MongoDB database
        res.json({success:true, data : foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message :"Error"})
    }


}


//remove food from the list

export const removeFood = async(req,res) =>{
    try {
        const foods = await foodModel.findById(req.body.id) // Finding the food item by its ID in the MongoDB database
        // Check if the food item exists
        if (!foods) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        fs.unlink(`uploads/${foods.image}`,()=>{}) // Deleting the associated image file from the server
        await foodModel.findByIdAndDelete(req.body.id) // Deleting the food item from the MongoDB database by its ID
        res.json({success:true, message : "item removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message :"Error"}) 
    }
}
