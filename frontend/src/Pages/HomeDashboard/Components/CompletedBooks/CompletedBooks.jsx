import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const CompletedBooks = () => {
  // Dummy data for illustration. In a real app, this would come from your database.
  const completedBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImageUrl: "https://example.com/gatsby-cover.jpg",
      completionDate: "2023-01-15"
    },
    // ... other books
  ];

  return (
    <Box  mt={2}>
      <Grid container spacing={3}>
        {completedBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={book.coverImageUrl}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {book.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Completed on: {new Date(book.completionDate).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CompletedBooks;
