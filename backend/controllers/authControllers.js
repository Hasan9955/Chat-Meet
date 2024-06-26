import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import generateToken from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try { 
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "user already exists" })
        }

        // create hash password here
        const salt = await bcryptjs.genSalt(10)
        const hasPass = await bcryptjs.hash(password, salt)



        const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlsProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`


        const newUser = new User({
            fullName,
            username,
            password: hasPass,
            gender,
            profilePic: gender === 'male' ? boysProfilePic : girlsProfilePic

        })

        if(newUser){

            // generate jwt token
            generateToken(newUser._id, res)
            await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
        }else{
            res.status(400).json({error: "invalid user data"})
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log(0);
        const user = await User.findOne({username})
        console.log(1);
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "")
        console.log(2);
        if(!user, !isPasswordCorrect){
            return res.status(400).json({error: "invalid username or password"})
        }
        console.log(3);
        generateToken(user._id, res);
        console.log(4);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"});

    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({massage: "Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
        
    }
}