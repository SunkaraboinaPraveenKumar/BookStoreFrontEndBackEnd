import User from "../model/user_model.js";
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created Successfully!!", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        const isMatch = await bcryptjs.compare(password, user?.password)

        if (!user || !isMatch) {
            res.status(400).json({ message: "Invalid user name or password" })
        }
        else {
            res.status(200).json({
                message: "User Login Successfull!!", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }
    }
    catch (error) {
        console.log("error" + error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}