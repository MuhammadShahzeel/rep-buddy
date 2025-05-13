import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];
  console.log("✅ Token received on backend:", token); // ✅ LOG THIS
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(_id).select("_id");
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Authorization token" });
  }  
};
