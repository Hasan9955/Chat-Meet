import mongoose, { mongo } from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

    ],
    message:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }


    ],
    // createdAt, updatedAt

}, {timestamps: true}); 

const ConverSation = mongoose.model("Conversation", conversationSchema)

export default ConverSation;




