import express from "express";

import UserRoutes from "./routes/UserRoutes.js";
import HomeRoutes from "./routes/HomeRoutes.js";
import OpenAIRoutes from "./routes/OpenAIRoutes.js";
import ProductsRoutes from "./routes/ProductsRoutes.js";

const app = express();
const port = 5000;

app.set("view engine", "ejs");
export async function init() {
  app.use("/users", UserRoutes);
  app.use("/openai", OpenAIRoutes);
  app.use("/", HomeRoutes);
  app.use("/products", ProductsRoutes);

  app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
  });
}
