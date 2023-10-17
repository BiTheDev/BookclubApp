// Routes/BooksRoutes.js

const express = require('express');
const router = express.Router();
const BooksController = require('../Controllers/BooksController');

router.get('/', BooksController.getAllBooks);
router.get('/:id', BooksController.getBookById);
router.post('/', BooksController.addBook);
router.put('/:id', BooksController.updateBook);
router.delete('/:id', BooksController.deleteBook);

module.exports = router;
