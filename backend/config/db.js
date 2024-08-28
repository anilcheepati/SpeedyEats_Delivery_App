import mongoose from "mongoose";



//making DB connection with the below function
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ryan:ryan123@cluster0.7z6k8.mongodb.net/food-delivery-app')
    .then(()=>{console.log("DB connected...")})
}