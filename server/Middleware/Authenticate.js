import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import UserModel from "../Models/UserModel.js";

const Authenticate = expressAsyncHandler(async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      let token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.authId = decoded.id;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Authorization Failed");
    }
  } else {
    res.status(401);
    throw new Error("Authorization Required");
  }
});

export default Authenticate;
