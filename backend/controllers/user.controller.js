import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const loginUSer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    // Create a token
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);
    // Create a token
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export { loginUSer, signupUser };
