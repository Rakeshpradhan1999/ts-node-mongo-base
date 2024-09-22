import { Response } from "express";

export const sendResponse = (
  res: Response,
  success: boolean,
  message: string = "Success",
  data: any = null,
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};
