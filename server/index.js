import express from "express";
import * as dotenv from "dotenv";
import cros from "cors";
import connectDB from "./db/index.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cros());
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

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
