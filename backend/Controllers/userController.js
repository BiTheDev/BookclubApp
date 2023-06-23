import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.createUser(req.body.username, hashedPassword);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await userModel.getUser(req.body.username);

        if (!user) {
            return res.status(400).json({ message: "Cannot find user" });
        }

        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
        } else {
            res.status(403).json({ message: "Invalid password" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {registerUser, loginUser}