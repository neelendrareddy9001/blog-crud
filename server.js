import "dotenv/config";

import express from "express";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();
const port = process.env.PORT || 1000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello world");
});

//routes
app.use("/api/user", userRoutes);

app.use("/api/post", postRoutes);

app.listen(port, () => {
  console.log(`Server is running at port: http://localhost:${port}`);
});
