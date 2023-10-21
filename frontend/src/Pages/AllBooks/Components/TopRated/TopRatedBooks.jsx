import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Select, MenuItem } from "@mui/material";

const genres = [
  "fiction",
  "mystery",
  "fantasy",
  "history",
  "science",
  "romance",
  "biography",
  "self-help",
  "business",
  "thriller",
];

const TopRatedBooks = () => {
  const [topRatedBooks, setTopRatedBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("fiction");

  useEffect(() => {
    fetch(`/api/topRatedBooks?genre=${selectedGenre}`)
      .then((response) => response.json())
      .then((data) => setTopRatedBooks(data))
      .catch((error) => console.error("Error fetching top rated books:", error));
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const defaultImage = "path_to_default_image.jpg"; // Provide a default or placeholder image URL here

  return (
    <Box p={3}>
      <Box mb={3} display="flex" alignItems="center">
        <Typography variant="h6" mr={2}>Select a Genre:</Typography>
        <Select value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box display="flex" overflow="auto">
        {topRatedBooks.map((book, index) => (
          <Box key={index} width={250} height={320} mr={2}>
            <Card sx={{ height: "100%", width: "200px" }}>
              <CardMedia
                component="img"
                sx={{
                  height: 130,
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                image={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : defaultImage
                }
                alt={book.volumeInfo.title}
              />
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

export default TopRatedBooks;
