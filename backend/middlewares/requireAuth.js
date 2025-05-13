import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const requireAuth = async (req, res, next) => {
  const { Authorization } = req.headers;
  if (!Authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = Authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(_id).select("_id");
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Authorization token" });
  }  
};
