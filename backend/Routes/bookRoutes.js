// Routes/BooksRoutes.js

import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
  trendingBooks,
  allBooksList,
  topRatedBooks,
  saveGoogleBook
} from "../Controllers/bookController.js";

const router = Router();

//Google Books
router.get("/book-search", searchBooks);
router.get("/trending-books", trendingBooks);
router.get("/all-list", allBooksList);
router.get("/top-rated-books", topRatedBooks);


//regular books

router.get("/get-regular-books", getAllBooks);
router.get("/get-book/:id", getBookById);
router.post("/add-book", addBook);
router.put("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);
router.post("/save-google-book", saveGoogleBook);


export default router;
