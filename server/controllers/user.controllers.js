import bcrypt from "bcrypt";
import { createError } from "../error.js";
import { User } from "../models/user.model.js";
import { createToken } from "../services/authentication.services.js";

const registerUser = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return next(createError(400, "All fields are required"));
    }

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return next(createError(409, "Email is already in use"));
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    const token = createToken(createdUser);
    return res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

export { registerUser };
