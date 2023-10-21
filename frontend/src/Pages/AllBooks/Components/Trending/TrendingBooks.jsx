import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const TrendingBooks = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    fetch("/api/trendingBooks")
      .then((response) => response.json())
      .then((data) => setTrendingBooks(data))
      .catch((error) => console.error("Error fetching trending books:", error));
  }, []);

  return (
    <Box p={3}>
      <Box display="flex" overflow="auto">
        {trendingBooks.map((book, index) => (
          <Box key={index} width={250} mr={2}>
            <Card>
              {book.volumeInfo.imageLinks && (
                <CardMedia
                  component="img"
                  sx={{
                    height: 140,
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
              <CardContent>
                <Typography variant="h6" noWrap>
                  {book.volumeInfo.title}
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                </Typography>
                <Typography variant="body2" mt={2} noWrap>
                  {book.volumeInfo.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrendingBooks;
