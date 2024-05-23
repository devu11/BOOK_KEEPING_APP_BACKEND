import express from "express";
import { createBook, deleteBook, findBook, findSingleBook, searchBook, updateBook } from "../controllers/BookController.js";

const router = express.Router();


router.post("/createBook",createBook)
router.get("/findBook",findBook)
router.get('/findBook/:bookId', findSingleBook);
router.put("/updateBook/:bookId",updateBook)
router.delete("/deleteBook/:bookId",deleteBook)
router.get('/search', searchBook)
  





export default router;


