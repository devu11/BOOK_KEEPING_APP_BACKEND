import express from "express";
import { createBook, deleteBook, findBook, updateBook } from "../controllers/BookController.js";

const router = express.Router();


router.post("/createBook",createBook)
router.get("/findBook",findBook)
router.put("/updateBook/:bookId",updateBook)
router.delete("/deleteBook/:bookId",deleteBook)





export default router;


