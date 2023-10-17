// Routes/BooksRoutes.js

import { Router } from 'express';
import { getAllBooks, getBookById, addBook, updateBook, deleteBook } from '../Controllers/bookController.js';

const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
