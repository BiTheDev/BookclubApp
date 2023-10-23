import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from '@mui/material';

const BookDetail = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/get-book/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Card sx={{ display: 'flex', marginTop: 3 }}>
        <CardMedia
          component="img"
          sx={{ height:'auto', width: 200, backgroundSize: 'contain' }}
          image={book.coverImageUrl}
          alt={book.title}
        />
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Author: {book.author}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {book.description}
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ marginTop: 2 }}>
            ISBN: {book.ISBN}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Pages: {book.totalPages}
          </Typography>
        </CardContent>
      </Card>
      {/* Here you can add more sections like user reviews, comments, ratings, etc. */}
    </Container>
  );
};

export default BookDetail;
