import express from "express";
const router = express.Router();
import {
  addBook,
  getBooks,
  findBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", findBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;