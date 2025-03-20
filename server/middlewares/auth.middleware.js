import jwt from "jsonwebtoken";
import { createError } from "../error.js";
import { validateToken } from "../services/authentication.services.js";

export const verifyJWT = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) return next(createError(401, "You are not authenticated"));

    const user = validateToken(token);
    if (!user) {
      return next(createError(401, "Invalid access token"));
    }
    
    req.user = user;
    return next();
  } catch (err) {
    next(err);
  }
};
