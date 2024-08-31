require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http//localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);

mongoose
  .connect(
    `mongodb+srv://chotife:${process.env.db_password}@cluster0.fryu8.mongodb.net/`
  )
  .then(() => {
    console.log("Mongo db is connected");
    app.listen(PORT, () =>
      console.log("Server running on port http://localhost:5000")
    );
  })
  .catch((error) => console.log(error));
