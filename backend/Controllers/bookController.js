
import Book from '../Models/bookModel.js';
import {fetchBooksFromGoogleAPI, fetchTrendingBooks, fetchTopRatedBooks, fetchAllBooksList} from '../Services/bookService.js'


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


//google books

export async function searchBooks(req, res) {
    const query = req.query.q;
    console.log(query)
    try {
        const books = await fetchBooksFromGoogleAPI(query);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch books', error });
    }
}


export async function trendingBooks(req, res) {
    const { genre, language } = req.query;
    try {
        const books = await fetchTrendingBooks(genre, language);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch from Google Books', error });
    }
}

export async function allBooksList(req, res) {
    const { genre, search, language } = req.query;
    try {
        const books = await fetchAllBooksList(genre, search, language);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch books from Google Books', error });
    }
}

export async function topRatedBooks(req, res) {
    const { genre, language } = req;
    try {
        const books = await fetchTopRatedBooks(genre, language);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch top rated books from Google Books', error });
    }
}

