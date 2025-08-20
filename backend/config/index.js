import dotenv from "dotenv" 
import path from 'path'

dotenv.config({path: path.join(process.cwd(), '.env')}) 


export default {
    mongo_url: process.env.MONGODB_URL,
    node_env: process.env.NODE_ENV, 
    port: process.env.PORT,  
    jwt_access_secret: process.env.JWT_SECURE_KEY
}


// Get a random string from node: 
// require('crypto').randomBytes(64).toString('hex')