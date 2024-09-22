import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { userSchema } from "../validations/user.validation";
import { sendResponse } from "../middleware/response";
import { AppError } from "../utils/AppError";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();

    sendResponse(res, true, "Users fetched successfully", users);
  } catch (error) {
    next(new AppError("Failed to retrieve users", 500));
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = userSchema.safeParse(req.body);

    const { name, email } = req.body;
    if (!result.success) {
      return res.status(400).json(result.error);
    }
    const newUser = new User({ name, email });
    await newUser.save();
    sendResponse(res, true, "User created successfully", newUser);
  } catch (error) {
    next(new AppError("Error creating user", 500));
  }
};
