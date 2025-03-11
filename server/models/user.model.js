import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
