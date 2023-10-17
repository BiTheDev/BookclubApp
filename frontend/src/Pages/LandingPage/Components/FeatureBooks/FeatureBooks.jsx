import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const books = [
  // Sample book data. Ideally, you'd fetch this from your backend.
  {
    title: "Book Title 1",
    author: "Author Name",
    description: "Short description about the book.",
    coverImage: "path-to-image1.jpg",
  },
  // ... (more books)
];

const FeatureBooks = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Books
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        mt={4}
        gap={2}
      >
        {books.map((book, index) => (
          <Card key={index} sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
              component="img"
              height="140"
              image={book.coverImage}
              alt={book.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {book.author}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={2}>
                {book.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" size="large">
          View All Books
        </Button>
      </Box>
    </Box>
  );
};

export default FeatureBooks;
