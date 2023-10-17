// Controllers/BooksController.js

import Book from '../Models/bookModel.js';

export async function getAllBooks(req, res) {
    try {
        const books = await find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function getBookById(req, res) {
    try {
        const book = await findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function addBook(req, res) {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function updateBook(req, res) {
    try {
        let book = await findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book = await findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function deleteBook(req, res) {
    try {
        const book = await findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.remove();
        res.status(200).json({ message: 'Book removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

