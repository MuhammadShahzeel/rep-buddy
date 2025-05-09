import UserModel from "../models/user.model.js";


const loginUSer = async (req, res) => {
    res.json({ message: "Login User" });
}

const signupUser = async (req, res) => {
    res.json({ message: "Signup User" });
}   

export { loginUSer, signupUser };
  