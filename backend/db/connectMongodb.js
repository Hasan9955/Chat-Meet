import mongoose from "mongoose"

const connectMongoDB = async() =>{
    try {  
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log("Error connecting to mongoDB", error.message)
    }
}

export default connectMongoDB