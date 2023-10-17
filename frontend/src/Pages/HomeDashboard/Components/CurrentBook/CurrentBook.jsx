import React, { useState } from 'react';
import { Box, Typography, TextField, Button, LinearProgress } from '@mui/material';

const CurrentBook = () => {
  const [currentPage, setCurrentPage] = useState(0); // Placeholder for demo purposes

  // Dummy book data for illustration
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImageUrl: "https://example.com/gatsby-cover.jpg",
    totalPages: 200, // Total number of pages in the book
  };

  const progressPercentage = (currentPage / book.totalPages) * 100;

  return (
    <Box p={3} boxShadow={3} bgcolor="white" borderRadius={2}>
      <Box display="flex" alignItems="center">
        <Box mr={3}>
          <img src={book.coverImageUrl} alt={book.title} width="80" />
        </Box>
        <Box flex={1}>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{book.author}</Typography>
          <Typography variant="body2" color="textSecondary">{currentPage} of {book.totalPages} pages</Typography>
          <LinearProgress variant="determinate" value={progressPercentage} sx={{ mt: 2 }} />
        </Box>
      </Box>
      <Box mt={3} display="flex" alignItems="center">
        <TextField
          label="Current Page"
          type="number"
          variant="outlined"
          size="small"
          value={currentPage}
          onChange={(e) => setCurrentPage(Math.min(e.target.value, book.totalPages))} // Ensure the page doesn't exceed the total pages
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={() => {/* Update progress in database here */}}>
          Update Progress
        </Button>
      </Box>
    </Box>
  );
}

export default CurrentBook;
