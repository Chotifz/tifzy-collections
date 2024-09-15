require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRoutes = require("./routes/admin/products.routes");
const shopProductRoutes = require("./routes/shop/products-routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
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
app.use("/api/admin/products", adminProductsRoutes);
app.use("/api/shop/products", shopProductRoutes);

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
