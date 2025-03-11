import express from "express";
import * as dotenv from "dotenv";
import cros from "cors";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
app.use(cros());
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to F-Tracker Backend",
  });
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}.`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed: ", err);
  });
