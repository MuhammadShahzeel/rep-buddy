import UserModel from "../models/user.model.js";

const loginUSer = async (req, res) => {
  res.json({ email, password });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export { loginUSer, signupUser };
