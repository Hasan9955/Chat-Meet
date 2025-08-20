import dotenv from "dotenv"
dotenv.config();

import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import connectMongoDB from "./db/connectMongodb.js";
import cookieParser from "cookie-parser";
import express from "express";
import { app, server, io } from "./lib/socket.io.js";





app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;




app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("Hello World!!")
})




server.listen(PORT, () => {
    connectMongoDB();
    console.log(`server is running on port ${PORT}`)
})