import React, { useState } from 'react';
import axios from 'axios';
import {
    Box, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText
  } from '@mui/material';

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchBooks = async () => {
        try {
            const response = await axios.get(`/api/books/book-search?q=${query}`);
            setResults(response.data.items); // Google Books API returns the results under "items".
        } catch (error) {
            console.error("Failed to fetch books from API:", error);
        }
    }

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for a book..."
            />
            <Button onClick={searchBooks}>Search</Button>

            {results.length > 0 && (
                <ul>
                    {results.map(book => (
                        <li key={book.id}>
                            {book.volumeInfo.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookSearch