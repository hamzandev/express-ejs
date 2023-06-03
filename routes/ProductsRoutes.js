import express from "express";

const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    message: "ok",
    data: [
      { id: 1, name: "Product 1", price: 123 },
      { id: 2, name: "Product 2", price: 321 },
    ],
  })
);

export default router;
