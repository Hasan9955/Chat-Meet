import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import connectMongoDB from "./db/connectMongodb.js";


import express from "express"
import dotenv from "dotenv"
dotenv.config();


// My variables
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;




app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes); 

app.get("/", (req, res) => {
// root route http://localhost:5000/
    res.send("Hello World!!")
})




app.listen(PORT, () => {
    connectMongoDB();
    console.log(`server is running on port ${PORT}`)
})