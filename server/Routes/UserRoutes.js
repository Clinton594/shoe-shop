import express from "express";
import expressAsyncHandler from "express-async-handler";
import Authenticate from "../Middleware/Authenticate.js";
import UserModel from "../Models/UserModel.js";
import generateToken from "../utils/generateTokens.js";
import hashPassword from "../utils/hashPassword.js";

const UserRoutes = express.Router();

//  Login
UserRoutes.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await UserModel.findOne({ email: email.toLowerCase() });
    if (foundUser && (await foundUser.matchPassword(password))) {
      res.json({
        id: foundUser._id,
        email: foundUser.email,
        name: foundUser.name,
        isAdmin: foundUser.isAdmin,
        token: generateToken(foundUser._id),
        createdAt: foundUser.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Username or Password incorrect");
    }
  })
);

//  Register
UserRoutes.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    let { email, password, name } = req.body;
    email = email.toLowerCase();

    const foundUser = await UserModel.findOne({ email });

    if (!foundUser) {
      const foundUser = await UserModel.create({
        name,
        email,
        password: hashPassword(password),
      });
      if (foundUser) {
        res.json({
          id: foundUser._id,
          email: foundUser.email,
          name: foundUser.name,
          isAdmin: foundUser.isAdmin,
          token: generateToken(foundUser._id),
          createdAt: foundUser.createdAt,
        });
      } else {
        res.status(400);
        throw new Error("INVALID_USER_DATA");
      }
    } else {
      res.status(400);
      throw new Error("USER_EXISTS");
    }
  })
);

// Get user profile
UserRoutes.get(
  "/profile",
  Authenticate,
  expressAsyncHandler(async (req, res) => {
    const foundUser = await UserModel.findById(req.authId);
    if (foundUser) {
      res.json({
        id: foundUser._id,
        email: foundUser.email,
        name: foundUser.name,
        isAdmin: foundUser.isAdmin,
        createdAt: foundUser.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("USER_NOT_FOUND");
    }
  })
);

export default UserRoutes;
