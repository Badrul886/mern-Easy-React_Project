import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body

// console.log(process.env.MONGO_URI);

app.use("/api/products", productRoutes);

// the if block is used for production and deployment
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }
// Serve Vite frontend build files
if (process.env.NODE_ENV === "production") {
  // Serve the frontend build files
  const staticPath = path.join(__dirname, "frontend", "dist");
  app.use(express.static(staticPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(staticPath, "index.html"));
  });
}



app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});